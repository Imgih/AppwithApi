// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpXDoLXmUE9hlvPrKFbnKFqrxF9IWVWY",
  authDomain: "teste-41263.firebaseapp.com",
  projectId: "teste-41263",
  storageBucket: "teste-41263.appspot.com",
  messagingSenderId: "552297986556",
  appId: "1:552297986556:web:af72c488d4bc9dde759a79"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
