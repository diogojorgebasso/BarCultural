import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleAuthProvider } from "firebase/auth";
import { Button } from "@nextui-org/react";
import { useSignInWithProvider } from "../../lib/hooks/useSignInWithProvider";
import EmailPasswordSignInForm from "../../components/EmailPasswordSignInForm";
import {ImGoogle} from 'react-icons/im'

const SignIn = () => {
  const [signInWithProvider, signInWithProviderState] = useSignInWithProvider();
  const router = useRouter();
const handleGoogleClick = useCallback(() => {signInWithProvider(new GoogleAuthProvider())} ,[])

  const AuthProviderButton = () => {
    return (
      <Button
      icon={<ImGoogle />}
        onClick={handleGoogleClick}
      >
        Login com o Google
      </Button>
    );
  };

  const onSignIn = useCallback( () => {
    return router.push("/perfil");
  }, [router]);

  useEffect(() => {
    if (signInWithProviderState.success) {
      onSignIn();
    }
  }, [signInWithProviderState.success, onSignIn]);

  return (
    <div className="flex flex-col space-y-8 items-center justify-center mx-auto h-screen w-11/12 lg:w-4/12">
      <div>
        <h1 className="Hero">Sign In</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <AuthProviderButton />

        <EmailPasswordSignInForm onSignIn={onSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
