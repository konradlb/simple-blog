import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  orderBy,
  query,
  onSnapshot,
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

const db = getFirestore();

export const postsRef = collection(db, "posts");

const q = query(postsRef, orderBy("timestamp", "desc"));

export const getPosts = async (set) => {
  onSnapshot(q, (snapshot) => {
    let posts = [];
    snapshot.docs.forEach((post) => {
      posts.push({ ...post.data(), id: post.id });
    });

    set(posts);
  });
};
