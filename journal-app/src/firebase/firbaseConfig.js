import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_AwOgrpQPJoECeu_CDYeNcE1uIJF7jP4",
  authDomain: "react-app-journal-aa76a.firebaseapp.com",
  projectId: "react-app-journal-aa76a",
  storageBucket: "react-app-journal-aa76a.appspot.com",
  messagingSenderId: "868018818796",
  appId: "1:868018818796:web:175a341868d54fb86cdfc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Referencia a la BD
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Para autenticar con google
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
