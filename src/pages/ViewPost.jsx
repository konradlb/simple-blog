import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPosts } from "../firebase/firebase-config";
import { getDate } from "./../utils/getDate";

function ViewPost() {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  let params = useParams();

  useEffect(() => {
    getPosts(setPostsList, setLoading);
  }, []);

  const post = postsList.find((post) => {
    return post.postSlug === params.slug;
  });

  if (isLoading) return <h2>Loading</h2>;
  if (post === undefined) return <h2>There is no such post </h2>;
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
