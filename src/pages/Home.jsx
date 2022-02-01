import React, { useEffect, useState } from "react";

import { getPosts } from "../firebase/firebase-config";
import { getDate } from "./../utils/getDate";
function Home() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    getPosts(setPostsList);
  }, []);

  if (Object.keys(postsList).length === 0) return "";
  else
    return (
      <div className="homePage">
        {postsList.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                  <h5>{getDate(post.timestamp)}</h5>
                  <img src={post.postImageUrl} alt="Postimage" />
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
