import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  collection,
  orderBy,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const postsRef = collection(db, "posts");

const q = query(postsRef, orderBy("timestamp", "desc"));

export const getPosts = async (setPostsList, setLoading) => {
  setLoading(true);
  onSnapshot(q, (snapshot) => {
    let posts = [];
    snapshot.docs.forEach((post) => {
      posts.push({ ...post.data(), id: post.id });
    });

    setPostsList(posts);
    setLoading(false);
  });
};

export const postRef = (id) => {
  return doc(db, "posts", id);
};

export const updatePost = async (id, newFields) => {
  await updateDoc(postRef(id), newFields);
};

export const deletePost = async (id) => {
  await deleteDoc(postRef(id));
};
