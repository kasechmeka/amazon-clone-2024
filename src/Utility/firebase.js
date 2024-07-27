import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDKQbwuvhNTFJJihoRlxVvDp-0xbSev9OA",
  authDomain: "clone-57e8d.firebaseapp.com",
  projectId: "clone-57e8d",
  storageBucket: "clone-57e8d.appspot.com",
  messagingSenderId: "201748893994",
  appId: "1:201748893994:web:6cc0565af79b1bfeccce53",
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
