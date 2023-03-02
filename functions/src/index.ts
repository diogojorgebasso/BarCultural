const functions = require('firebase-functions');
import { getStorage, ref } from "firebase/storage";
const admin = require('firebase-admin');
admin.initializeApp();


export const gerarIngresso = functions.firestore
  .document('ingresso/{docId}')
  .onWrite((snap, context) => { 
    const value = snap.data();
    const email = value.email;
    const hash = value.hash;
   });

