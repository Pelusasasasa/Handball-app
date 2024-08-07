// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcYf-xeXB-x9v5XF63L-l6SBhvBIoDflQ",
  authDomain: "handballfixture.firebaseapp.com",
  projectId: "handballfixture",
  storageBucket: "handballfixture.appspot.com",
  messagingSenderId: "1032923926793",
  appId: "1:1032923926793:web:e6f85d32c61534ed74c3d8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );