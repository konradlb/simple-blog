import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";

import { postsCollectionRef } from "../firebase/firebase-config";
import { getDate } from "./../utils/getDate";
function Home() {
  const [postsList, setPostsList] = useState([]);

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(postsList);

  return (
    <div className="homePage">
      {postsList.map((post) => {
        return (
          <div key={post.id} className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
                <h5>{getDate(post.timestamp)}</h5>
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
