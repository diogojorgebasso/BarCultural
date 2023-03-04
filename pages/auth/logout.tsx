import React, {useCallback} from "react"

import { signOut } from "firebase/auth";
import { useAuth } from "reactfire";

import { Button, Text } from "@nextui-org/react";

export default function LogOut(){
    const auth = useAuth();

    const onSignOutRequested = useCallback(() => {
      return signOut(auth);
    }, [auth]);
  
  
    return (
        <>
        <Text>Tem certeza que deseja se deslogar?</Text>
        <Button onClick={onSignOutRequested}>Sim!</Button>
        </>
  )
};

