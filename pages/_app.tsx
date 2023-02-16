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

import configuration from '~/configuration';

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
  
function MyApp({ Component, pageProps }) {
    const app = initializeApp(configuration.firebase);

    const persistence = isBrowser()
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

    const auth = initializeAuth(app, { persistence });

    // prevent emulator from being
    // called multiple times on page navigations
    if (configuration.emulator && !("emulator" in auth.config)) {
    // we can get the host by combining the local emulator host with the Auth port
        const host = getAuthEmulatorHost();
        connectAuthEmulator(auth, host);
    }


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

export default MyApp;

function getAuthEmulatorHost() {
    const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
    const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;
  
    return ["http://", host, ":", port].join("");
}

function isBrowser(){
    return typeof window !== "undefined";
}