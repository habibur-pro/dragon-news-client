// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7MUVpFAHF89FNUUZIQxwyKffWzgxE0Ow",
    authDomain: "dragon-news-21863.firebaseapp.com",
    projectId: "dragon-news-21863",
    storageBucket: "dragon-news-21863.appspot.com",
    messagingSenderId: "615739413911",
    appId: "1:615739413911:web:4bff65ce8f0513e1d260d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app