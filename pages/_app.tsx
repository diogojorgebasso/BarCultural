import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { SiteNavBar } from '../components/SiteNavBar'
import { initializeApp } from 'firebase/app';

import {
    initializeAuth,
    indexedDBLocalPersistence,
    connectAuthEmulator,
    inMemoryPersistence,
} from 'firebase/auth';
  
import {
    FirebaseAppProvider,
    AuthProvider
} from 'reactfire';

const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        primary: '#4ADE7B',
        secondary: '#F9CB80',
        error: '#FCC5D8'
      },
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        primary: '#4ADE7B',
        secondary: '#F9CB80',
        error: '#FCC5D8'
    }, 
    }
  })
  
export default function MyApp({ Component, pageProps }) {
    const app = initializeApp(
      {

        apiKey: "AIzaSyCVM9NDO_NvQm4cMAUFo4gzQ51Q-nLADAg",
      
        authDomain: "bar-cultural-unifei.firebaseapp.com",
      
        projectId: "bar-cultural-unifei",
      
        storageBucket: "bar-cultural-unifei.appspot.com",
      
        messagingSenderId: "346192697346",
      
        appId: "1:346192697346:web:9b92780e784cdacaf8ef1b",
      
        measurementId: "G-4W16F70233"
      
      }
    );

    const persistence = isBrowser()
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

    const auth = initializeAuth(app, { persistence });

    return (
    <FirebaseAppProvider firebaseApp={app}>
        <AuthProvider sdk={auth}>
            <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
            light: lightTheme.className,
            dark: darkTheme.className
            }}
        >
                <NextUIProvider>
                    <SiteNavBar></SiteNavBar> {/* Check here */}
                        <Component {...pageProps} />
                </NextUIProvider>
            </NextThemesProvider>
        </AuthProvider>
    </FirebaseAppProvider>
  );
}

function isBrowser(){
    return typeof window !== "undefined";
}