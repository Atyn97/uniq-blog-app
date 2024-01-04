// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-23ad7.firebaseapp.com",
  projectId: "blog-23ad7",
  storageBucket: "blog-23ad7.appspot.com",
  messagingSenderId: "824209157496",
  appId: "1:824209157496:web:d36e594540848c9529ec8d",
  measurementId: "G-XWT9Q0W85Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
