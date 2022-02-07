import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPosts, updatePost } from "../firebase/firebase-config";

function EditPost() {
  const [title, setTitle] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [postText, setPostText] = useState("");
  const [postSlug, setPostSlug] = useState("");
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    getPosts(setPostsList, setLoading);
  }, []);

  const post = postsList.find((post) => {
    return post.postSlug === params.slug;
  });

  useEffect(() => {
    if (post !== undefined) {
      setTitle(post.title);
      setPostImageUrl(post.postImageUrl);
      setPostText(post.postText);
      setPostSlug(post.postSlug);
    }
  }, [post]);

  const handleUpdatePost = async () => {
    const newFields = {
      title: title,
      postImageUrl: postImageUrl,
      postText: postText,
      postSlug: postSlug,
    };
    await updatePost(post.id, newFields);

    navigate(`/view-post/${postSlug}`);
  };

  if (isLoading) return <h2>Loading</h2>;
  else
    return (
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create a post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              value={title}
            ></input>
          </div>
          <div className="inputGp">
            <label>Post image url:</label>
            <input
              placeholder="Url.."
              onChange={(event) => {
                setPostImageUrl(event.target.value);
              }}
              value={postImageUrl}
            ></input>
          </div>

          <div className="inputGp">
            <label>Slug:</label>
            <input
              placeholder="Slug.."
              onChange={(event) => {
                setPostSlug(event.target.value);
              }}
              value={postSlug}
            ></input>
          </div>

          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post.."
              onChange={(event) => {
                setPostText(event.target.value);
              }}
              value={postText}
            ></textarea>
          </div>
          <button onClick={handleUpdatePost}> Submit </button>
        </div>
      </div>
    );
}

export default EditPost;
