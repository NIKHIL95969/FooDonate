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
        <h2 className="login_heading">Login/Register</h2>
        
        <button className="login-with-google-btn login-btn" onClick={signInWithGoogle}>
          <img className="login_google_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt=""  /> <p className="login-btn-text">Sign in with Google</p>
        </button>
      </div>
    </div>
    
  )
}
