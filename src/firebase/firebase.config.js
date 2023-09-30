// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlnlAPMV7h78IAYBtL7wkoeCyX97OHkG0",
  authDomain: "auth-practice-project-aa708.firebaseapp.com",
  projectId: "auth-practice-project-aa708",
  storageBucket: "auth-practice-project-aa708.appspot.com",
  messagingSenderId: "1017684679082",
  appId: "1:1017684679082:web:15a78e7d2a745d060933d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth