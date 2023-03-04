import React from "react"
import { Button, Link } from "@nextui-org/react"

export default function LogInButton(){
    
  return (
    <Button auto flat as={Link} href="signup">
      Cadastre-se
    </Button>
  )
};

