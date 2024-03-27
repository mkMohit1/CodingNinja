// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvFGJWS5PAeuzRj3Yqog4YJBUVMEJEKZQ",
    authDomain: "react-chat-app-e6258.firebaseapp.com",
    projectId: "react-chat-app-e6258",
    storageBucket: "react-chat-app-e6258.appspot.com",
    messagingSenderId: "1057155666087",
    appId: "1:1057155666087:web:d0f321be2da7e11dbdcb82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
