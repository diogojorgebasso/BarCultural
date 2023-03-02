import React from 'react'
import GuardedPage  from "../components/GuardedPage"

import {useUser} from 'reactfire'

export default function perfil(){
  const { status, data:user } = useUser();

  if (status === 'loading') {
    return <span>carregando teus dados...</span>;
  }

  return (
    <GuardedPage>
      <p>Bem vindo de volta! {user?.displayName}.</p>
    </GuardedPage>
  )
}

