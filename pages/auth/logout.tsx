import React from "react"
import { signOut } from "firebase/auth";
import { useAuth } from "reactfire";
import { useRouter } from "next/router";
import { Text } from "@nextui-org/react";

export default function LogOut(){
  const auth = useAuth();
  const router = useRouter();

  async () => {
    await signOut(auth);
    router.push("/");
  }
  return (
    <Text>Você foi deslogado com sucesso!</Text>
  )
};

