import './css/Foodlist.css'
import Foodlist_card from './Foodlist_card'
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebaseConfige";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import DataLoadingCard from './DataLoadingCard';


export default function Foodlist({isAuth}) {
  const [postLists, setPostList] = useState([]);
  const [isloading, setLoading] = useState(true);
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
    


    const timer = setTimeout(() => {
      // Code to be executed after 2 seconds
      // Add your logic here

      const getPosts = async () => {
        if(!isAuth){
          window.location.pathname = "/login";
        }
        else{
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          setLoading(false);
        }
      };
  
      getPosts();

      
    }, 2000);

    // Cleanup function to clear the timer if the component unmounts or the effect re-runs
    return () => clearTimeout(timer);
  }, [deletePost]);

  console.log(postLists)

  return (
    <div className='Foodlist_container'>
      { !isloading ? 
       
      (  postLists.map((post) => {
        return (
          <Card className='card_post' style={{ width: '18rem' }}>
            <Card.Img style={{ width: 'inherit' }} variant="top" src={post.imageUrl}/>
            <Card.Body className='card_body'>
              <Card.Title className='post_title'>{post.title}</Card.Title>
              <Card.Text className='post_subtitle'>
                {post.postText}
              </Card.Text>
              <Card.Title className='post_location'>Location - {post.location}</Card.Title>
              <Card.Title className='post_by'>@{post.author.name}</Card.Title>
              <div className="card_btns">
                <Button className='need_btn' variant="primary">Need</Button>
                { 
                auth ? 
                  isAuth && (post.author.id === auth.currentUser.uid) ? (
                    <button
                      className='delete_post_btn'
                      onClick={() => { deletePost(post.id); }}>Delete
                    </button>
                    ) : "" 

                  : "" 
                }
              </div>
            </Card.Body>
          </Card>
        );
      }))
      
    //  if not then
    :
    <DataLoadingCard/>
    }
    </div>
  )
}
