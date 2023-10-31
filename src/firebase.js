import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTtVHkxlmY1n0OpLOWDU3jA_WoFVSF_bE",
  authDomain: "fir-auth-72f99.firebaseapp.com",
  projectId: "fir-auth-72f99",
  storageBucket: "fir-auth-72f99.appspot.com",
  messagingSenderId: "180016303459",
  appId: "1:180016303459:web:6993617c25d1694e829756",
  measurementId: "G-TZFZKE5ZVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};