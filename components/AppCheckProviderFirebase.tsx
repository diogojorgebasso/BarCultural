import React, {FC} from "react"
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import {    useFirebaseApp, 
    AppCheckProvider} from "reactfire"

const APP_CHECK_TOKEN = "6LdqCZIjAAAAAEs75exDvAH-Q4Q4XNTNyh-aamn2";

/**
 * Function to use the App Check Firebase API
 * @param children The parent react component
 * @returns A HOC
 */
export default function AppCheckProviderFirebase({ children }){
    const appFirebase = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`
    const appCheck = initializeAppCheck(appFirebase, {
      provider: new ReCaptchaV3Provider(APP_CHECK_TOKEN),
      isTokenAutoRefreshEnabled: true,
    });
  return (
    <AppCheckProvider sdk={appCheck}>
        {children}
    </AppCheckProvider>
  )
};

