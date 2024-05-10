// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7LStesAkj3PUlXTS673oIKZarv7n4esY",
  authDomain: "dlolah-ec1f7.firebaseapp.com",
  databaseURL: "https://dlolah-ec1f7-default-rtdb.firebaseio.com",
  projectId: "dlolah-ec1f7",
  storageBucket: "dlolah-ec1f7.appspot.com",
  messagingSenderId: "993821716897",
  appId: "1:993821716897:web:b7390f67253f8230a9dbe0",
  measurementId: "G-X4X1VSZTZE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);
