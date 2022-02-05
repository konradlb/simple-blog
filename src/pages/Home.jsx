import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getPosts, deletePost } from "../firebase/firebase-config";
import { getDate } from "./../utils/getDate";

function Home() {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    getPosts(setPostsList, setLoading);
  }, []);

  const handleDeletePost = async (id) => {
    await deletePost(id);
  };

  const handleEditPost = (slug) => {
    navigate(`/edit-post/${slug}`);
  };

  if (isLoading) return <h2>Loading</h2>;
  if (postsList.length === 0) return <h2>There is no posts</h2>;
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
                <div className="buttons">
                  <button
                    onClick={() => {
                      handleDeletePost(post.id);
                    }}
                  >
                    Delete post
                  </button>
                  <button
                    onClick={() => {
                      handleEditPost(post.postSlug);
                    }}
                  >
                    Edit post
                  </button>
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
