import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const postsCollectionRef = collection(db, "posts");

export const getPosts = async (set) => {
  const data = await getDocs(
    postsCollectionRef
    // orderBy("timestamp", "desc")
  );
  console.log("getPosts");
  set(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};
