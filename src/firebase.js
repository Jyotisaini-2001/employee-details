// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC69Ufv3A1ySPLkk6Vv9Kn2rviWrpVTAZg",
  authDomain: "greendzine-4e96d.firebaseapp.com",
  databaseURL: "https://greendzine-4e96d-default-rtdb.firebaseio.com",
  projectId: "greendzine-4e96d",
  storageBucket: "greendzine-4e96d.appspot.com",
  messagingSenderId: "843018441684",
  appId: "1:843018441684:web:3f8b261ac16c27a8c23c41",
  measurementId: "G-94S6R933JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = getFirestore();
// initializes Firebase Authentication using the getAuth function and the app instance
const auth = getAuth(app);
export { app, firestore, db, auth };