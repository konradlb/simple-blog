import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPosts } from "../firebase/firebase-config";
import { getDate } from "./../utils/getDate";

function ViewPost() {
  const [postsList, setPostsList] = useState([]);

  let params = useParams();

  useEffect(() => {
    getPosts(setPostsList);
  }, []);

  const post = postsList.find((post) => {
    return post.postSlug === params.slug;
  });

  if (postsList.length === 0) return <h2>Loading</h2>;
  else
    return (
      <div className="homePage">
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
              <h5>{getDate(post.timestamp)}</h5>
              <img src={post.postImageUrl} alt="Postimage" />
            </div>
          </div>
          <div className="postTextContainer">
            <h1>post slug: {params.slug}</h1>
            {post.postText}
          </div>
        </div>
      </div>
    );
}

export default ViewPost;
