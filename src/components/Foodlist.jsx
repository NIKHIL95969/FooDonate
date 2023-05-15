import './css/Foodlist.css'
import Foodlist_card from './Foodlist_card'
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebaseConfige";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Foodlist(isAuth) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    if(!isAuth){
      window.location.pathname = "/login";
    }
    else{
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
    }
  };
  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  console.log(postLists)

  return (
    <div className='Foodlist_container'>
       {postLists.map((post) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: 'inherit' }} variant="top" src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg" />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.postText}
              </Card.Text>
              <Card.Title>{post.location}</Card.Title>
              <div className="card_btns">
                <Button variant="primary">Need</Button>
                { 
                auth ? 
                  isAuth && (post.author.id === auth.currentUser.uid) ? (
                    <button
                      onClick={() => { deletePost(post.id); }}>Delete
                    </button>
                    ) : "" 

                  : "" 
                }
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  )
}
