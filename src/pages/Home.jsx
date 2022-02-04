import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../firebase/firebase-config";
import { getDate } from "./../utils/getDate";

function Home() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    getPosts(setPostsList);
  }, []);

  if (postsList.length === 0) return <h2>Loading</h2>;
  else
    return (
      <div className="homePage">
        {postsList.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>
                    <Link to={`/view-post/${post.postSlug}`}>{post.title}</Link>
                  </h1>
                </div>

                <h5>{getDate(post.timestamp)}</h5>
                <div className="image">
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
