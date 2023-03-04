import { doc, DocumentReference } from "firebase/firestore";
import { useFirestore, useFirestoreDoc } from "reactfire";

export function useIsSocio(uid: string){
    const firestore = useFirestore();
    const path = '/socios';
    const ref = doc(firestore, path, uid) as DocumentReference<Response>;
    const useDoc = useFirestoreDoc(ref);
    return useDoc.data?.exists();
}
