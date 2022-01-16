// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZah-pxJgkUbxfnMjFxdeM0tUc7OIUoq4",
  authDomain: "insicom-dev.firebaseapp.com",
  projectId: "insicom-dev",
  storageBucket: "insicom-dev.appspot.com",
  messagingSenderId: "828125317762",
  appId: "1:828125317762:web:f15bafc39cdee244d3c29b",
  measurementId: "G-DETKT5KCTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };