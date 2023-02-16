import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import {Sitenavbar} from '../components/Sitenavbar'

const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {...}, // optional
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {...}, // optional
    }
  })
  
function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >

    <NextUIProvider>
        <Sitenavbar>
        <Component {...pageProps} />
        </Sitenavbar>
    </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
