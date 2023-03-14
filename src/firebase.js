
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDA7DK8xwkr6VheVrU05WdgWIRU7TbY_ds",
  authDomain: "react-portfolio-46cd1.firebaseapp.com",
  projectId: "react-portfolio-46cd1",
  storageBucket: "react-portfolio-46cd1.appspot.com",
  messagingSenderId: "536772829360",
  appId: "1:536772829360:web:d0e6b7f41151dbf71d5b75",
  measurementId: "G-C3VM431PCK"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);