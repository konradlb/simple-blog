import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getPosts, deletePost } from "../firebase/firebase-config";
import { getDate } from "./../utils/getDate";

function ViewPost() {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getPosts(setPostsList, setLoading);
  }, []);

  const post = postsList.find((post) => {
    return post.postSlug === params.slug;
  });

  const handleDeletePost = async () => {
    await deletePost(post.id);

    navigate(`/`);
  };

  const handleEditPost = () => {
    navigate(`/edit-post/${post.postSlug}`);
  };

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
            <div className="buttons">
              <button onClick={handleDeletePost}>Delete post</button>
              <button onClick={handleEditPost}>Edit post</button>
            </div>
          </div>
          <div className="postTextContainer">{post.postText}</div>
        </div>
      </div>
    );
}

export default ViewPost;
