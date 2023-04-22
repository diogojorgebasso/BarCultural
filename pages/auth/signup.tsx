import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleAuthProvider } from "firebase/auth";

import { useSignInWithProvider } from "../../lib/hooks/useSignInWithProvider";
import EmailPasswordSignUpForm from "../../components/EmailPasswordSignUp";

const SignUp = () => {
  const [signInWithProvider, signInWithProviderState] = useSignInWithProvider();

  const router = useRouter();
const handleGoogleClick = useCallback(() => {signInWithProvider(new GoogleAuthProvider())} ,[])
  const AuthProviderButton = () => {
    return (
      <button
        className="rounded-lg p-2 font-bold bg-red-400 text-white"
        onClick={handleGoogleClick}
      >
        Cadastre com sua conta Google
      </button>
    );
  };

  const onSignUp = useCallback(async () => {
    router.push("/perfil");
  }, [router]);

  useEffect(() => {
    if (signInWithProviderState.success) {
      onSignUp();
    }
  }, [signInWithProviderState.success, onSignUp]);

  return (
    <div className="flex flex-col space-y-8 items-center justify-center mx-auto h-screen w-11/12 lg:w-4/12">
      <div>
        <h1 className="Hero">Sign Up</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <AuthProviderButton />

        <EmailPasswordSignUpForm onSignup={onSignUp} />
      </div>
    </div>
  );
};

export default SignUp;