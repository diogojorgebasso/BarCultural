import React from "react"
import { Text } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { useFirestore, useFirestoreDocData } from "reactfire";
import { doc } from "firebase/firestore";

export default function Festa(){
  const router = useRouter()
  const { festa } = router.query;
/*
  const firestore = useFirestore();
  const ref = doc(firestore, 'festas', festa);

  const { status, data: count } = useFirestoreDocData(ref);
*/
  return (
    <Text>{festa}</Text>
  )
};

