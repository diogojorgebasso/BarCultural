import { FormEvent, useCallback, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "../lib/hooks/useSignInWithEmailAndPassword";

function EmailPasswordSignInForm(
  props: React.PropsWithChildren<{
    onSignIn: () => void;
  }>
) {
  const [signIn, state] = useSignInWithEmailAndPassword();
  const loading = state.loading;
  const error = state.error;

  useEffect(() => {
    if (state.success) {
      props.onSignIn();
    }
  }, [props, state.success]);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (loading) {
        return;
      }

      const data = new FormData(event.currentTarget);
      const email = data.get(`email`) as string;
      const password = data.get(`password`) as string;

      // sign user in
      return signIn(email, password);
    },
    [loading, signIn]
  );

