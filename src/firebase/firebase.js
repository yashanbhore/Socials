import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAF55JPPYtxuaNaQDd46ZwpoDZNel-EBis",
  authDomain: "socials-69.firebaseapp.com",
  projectId: "socials-69",
  storageBucket: "socials-69.appspot.com",
  messagingSenderId: "456789587624",
  appId: "1:456789587624:web:f5e20528df9dc23481f49d",
  measurementId: "G-H7ZZX2FHBN"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };