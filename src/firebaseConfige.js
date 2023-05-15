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
  apiKey: "AIzaSyAG1SVTeuI3BsjyjTO_H4dFDsiavjcXu5g",
  authDomain: "donate-b2f67.firebaseapp.com",
  projectId: "donate-b2f67",
  storageBucket: "donate-b2f67.appspot.com",
  messagingSenderId: "533473151664",
  appId: "1:533473151664:web:2b537c01d9e13672820975",
  measurementId: "G-W4882RH7RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);



export const provider = new GoogleAuthProvider();

