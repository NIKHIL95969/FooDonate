import './css/Donate.css'
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebaseConfige";
import { useNavigate } from "react-router-dom";


export default function Donate({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [location, setLocation] = useState("");
  const [imaegUrl, setImageUrl] = useState("");
  
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    
    await addDoc(postsCollectionRef, {
      title,
      postText,
      location,
      imaegUrl,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);


  return (
    <div className='donate_container'>
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Help People</h1>
          <div className="inputGp">
            <label> Title:</label>
            <input
              className='input_filled_donate'
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> Post:</label>
            <textarea
              className='input_filled_donate_post'
              placeholder="Post..."
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Location</label>
            <textarea
              className='input_filled_donate_location'
              placeholder="location.."
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Image</label>
            <textarea
              className='input_filled_donate_location'
              placeholder="imaegUrl.."
              onChange={(event) => {
                setImageUrl(event.target.value);
              }}
            />
          </div>
          <button className='donate-btn' onClick={createPost}> Submit Post</button>
        </div>
      </div>
    </div>
  )
}
