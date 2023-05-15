import React from 'react'
import './css/Login.css';
import { auth, provider } from "../firebaseConfige";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login({setIsAuth}) {

  let navigate = useNavigate();

  

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className='Login_section'>
      <div className="login_container">
        Login page
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
    
  )
}
