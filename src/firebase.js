// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAdwmeqf7lXoMHFBg26zY_2714CNayzOM",
    authDomain: "sunrun-dd.firebaseapp.com",
    databaseURL: "https://sunrun-dd-default-rtdb.firebaseio.com",
    projectId: "sunrun-dd",
    storageBucket: "sunrun-dd.appspot.com",
    messagingSenderId: "937935809463",
    appId: "1:937935809463:web:3ea7a110fc8654f859d632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;