// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Initializing a Firestore instance

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDusCA-R0wMd7AJo4uM_L_18meOhCbfffU",
  authDomain: "tarefa-c7251.firebaseapp.com",
  projectId: "tarefa-c7251",
  storageBucket: "tarefa-c7251.appspot.com",
  messagingSenderId: "846508805382",
  appId: "1:846508805382:web:32545b284cecf09bab6287"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const db = getFirestore(FIREBASE_APP);

export { db };
