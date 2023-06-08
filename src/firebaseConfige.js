// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz9b_nOR_TiGHS68zCfQq0QSYF85NB3J0",
  authDomain: "foodonate-2291e.firebaseapp.com",
  projectId: "foodonate-2291e",
  storageBucket: "foodonate-2291e.appspot.com",
  messagingSenderId: "359799556963",
  appId: "1:359799556963:web:b3fa0828689b005a36a156",
  measurementId: "G-HPFRLNJR1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);



export const provider = new GoogleAuthProvider();

