import React from "react"
import { Text, Image } from "@nextui-org/react"
import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

export default function Parceiros(){
    const isAmp = useAmp();

  return (
    <>
    <Text>Fique ligado nas nossas empresas parceiras:</Text>
    {isAmp ? (
        <amp-img
          width="300"
          height="300"
          src="/Logo_ItaCar.jpg"
          alt="Logo da Ita Car"
          layout="responsive"
        />
      ) : (
        <Image width="300" height="300" src="/Logo_ItaCar.jpg" alt="Logo da Ita Car" />
      )}
      </>
  )
};

