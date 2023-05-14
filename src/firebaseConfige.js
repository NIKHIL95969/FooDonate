// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0WEGy805wU4FHcuUjrxRMxuw1Put9FWE",
  authDomain: "foodonate-35c32.firebaseapp.com",
  projectId: "foodonate-35c32",
  storageBucket: "foodonate-35c32.appspot.com",
  messagingSenderId: "603506039487",
  appId: "1:603506039487:web:3d2b98c1cb02a1c194840a",
  measurementId: "G-CT36BWHWXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);