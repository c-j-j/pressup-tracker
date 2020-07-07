import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDJk4m14LpbZQV5abhVdOnuv4a6jP44kw",
  authDomain: "pressups-b7a58.firebaseapp.com",
  databaseURL: "https://pressups-b7a58.firebaseio.com",
  projectId: "pressups-b7a58",
  storageBucket: "pressups-b7a58.appspot.com",
  messagingSenderId: "848092238235",
  appId: "1:848092238235:web:8fea51a564e4289eb6d13e",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () =>
  firebaseAuth.signInWithPopup(googleAuthProvider);
export const signOut = () => firebaseAuth.signOut();

export default firebase;
