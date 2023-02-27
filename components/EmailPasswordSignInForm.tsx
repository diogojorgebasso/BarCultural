import { FormEvent, useCallback, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "../lib/hooks/useSignInWithEmailAndPassword";
import { Input, Spacer } from '@nextui-org/react';

export default function EmailPasswordSignInForm(
  props: React.PropsWithChildren<{
    onSignIn: () => void;
  }>
){
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
    return(
      <form className={"w-full"} onSubmit={onSubmit}>
        <Input labelPlaceholder="Email" />
        <Spacer y={1.6} />
        <Input.Password labelPlaceholder="Senha" />
      </form>
    );
}
