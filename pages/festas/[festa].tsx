import React from "react"
import { Text } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { doc, getDoc, getFirestore } from "firebase/firestore";

export async function getStaticProps({ params }) {

	try {
    const firestore = getFirestore(app);
    const docRef = doc(firestore, 'festas', params.festa);
    const docSnap = await getDoc(docRef);
    let data = docSnap.data();
		return {
			props: {
				festa: {
					id: params.festa,
					title: data.fields.title.stringValue,
					blurb: data.fields.blurb.stringValue,
					content: data.fields.content.stringValue,
				},
			},
			revalidate: 60,
		};
	} catch (error) {
		console.error(error);
		return { props: {} };
	}
}

export default function Festa({festa}){
  const router = useRouter()
  const { festa } = router.query;

  return (
    <Text>{festa}</Text>
  )
};
