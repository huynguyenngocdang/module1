// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzBOdaH1E0pGIhIzBXWC4jWJnYhP-aYd4",
  authDomain: "module-1-case-study.firebaseapp.com",
  projectId: "module-1-case-study",
  storageBucket: "module-1-case-study.appspot.com",
  messagingSenderId: "602231695240",
  appId: "1:602231695240:web:64b5871bc2b1718251fc3d",
  measurementId: "G-4S7EH8B3G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);