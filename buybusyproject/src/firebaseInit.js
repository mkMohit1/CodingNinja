// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2HNeG7LRuPdB8zLpbE5gL3nvoHiGgem8",
  authDomain: "buybusy-dc619.firebaseapp.com",
  projectId: "buybusy-dc619",
  storageBucket: "buybusy-dc619.appspot.com",
  messagingSenderId: "751851570808",
  appId: "1:751851570808:web:f792d7648ffe9476d1cf8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);