import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Donate from './components/Donate';
import Foodlist from './components/Foodlist';
import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
// import Home from './Pages/Home'
// import CreatePost from './Pages/CreatePost'
// import Login from './Pages/Login'
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfige";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  console.log(isAuth);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      // window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      {/* <nav>
        {!isAuth ? (
          <Link to="/login"></Link>
        ) : (
          <>
            <Link to="/"></Link>
            
          </>
        )}
      </nav> */}
      
      <Routes>

        <Route path="/" element={
          <React.Fragment>
            <Header signUserOut={signUserOut} isAuth={isAuth}/>
            <Home />
          </React.Fragment>
        } />

        <Route path="/donate" element={
          <React.Fragment>
          <Header />
          <Donate />
          </React.Fragment>
        }/>

        <Route path="/foodlist" element={
          <React.Fragment>
          <Header />
          <Foodlist />
          </React.Fragment>
        }/>
        <Route path="/login" element={
          <React.Fragment>
          <Login setIsAuth={setIsAuth}/>
          </React.Fragment>
        }/>
        {/* <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;