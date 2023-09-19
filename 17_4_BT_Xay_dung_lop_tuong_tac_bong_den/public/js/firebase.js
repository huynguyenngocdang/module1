// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1m883txvlo0PurfaZVS24E1A3DOrrkkg",
  authDomain: "nndh-battery.firebaseapp.com",
  projectId: "nndh-battery",
  storageBucket: "nndh-battery.appspot.com",
  messagingSenderId: "909056138271",
  appId: "1:909056138271:web:e33bebbd46c7319e03c92a",
  measurementId: "G-459WP2MT48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);