import React, { useState } from "react";

import { addDoc, serverTimestamp } from "firebase/firestore";
import { postsRef } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [postText, setPostText] = useState("");
  const [postSlug, setPostSlug] = useState("");

  const [isLoading, setLoading] = useState(false);

  let navigate = useNavigate();

  const createPost = async () => {
    setLoading(true);
    await addDoc(postsRef, {
      title: title,
      postImageUrl: postImageUrl,
      postText: postText,
      postSlug: postSlug,
      timestamp: serverTimestamp(),
    });
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="createPostPage">
      {isLoading ? (
        <h2>Sending post</h2>
      ) : (
        <div className="cpContainer">
          <h1>Create a post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></input>
          </div>
          <div className="inputGp">
            <label>Post image url:</label>
            <input
              placeholder="Url.."
              onChange={(event) => {
                setPostImageUrl(event.target.value);
              }}
            ></input>
          </div>

          <div className="inputGp">
            <label>Slug:</label>
            <input
              placeholder="Slug.."
              onChange={(event) => {
                setPostSlug(event.target.value);
              }}
            ></input>
          </div>

          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post.."
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            ></textarea>
          </div>
          <button onClick={createPost}> Submit </button>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
