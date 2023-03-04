const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore()


import { getStorage, ref } from "firebase/storage";

export const gerarIngresso = functions.firestore
  .document('ingresso/{docId}')
  .onWrite((snap, context) => { 
    const value = snap.data();
    const email = value.email;
    
   });


//assim que criar o usuario, adiciona-lo numa colecao do Firestore   
export const createdUserDocument = functions.auth.user().onCreate((user: User) => {
  db.collection("users")
  .doc(user.uid)
  .set(JSON.parse(JSON.stringify(user)))
})