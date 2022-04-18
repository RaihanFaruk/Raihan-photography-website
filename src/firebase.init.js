// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHTMLek4nk-dWzJZsW_Nz_42AfKI-6NXU",
  authDomain: "asighnment-firebase.firebaseapp.com",
  projectId: "asighnment-firebase",
  storageBucket: "asighnment-firebase.appspot.com",
  messagingSenderId: "372707644377",
  appId: "1:372707644377:web:761dd036c6c38fe033bfc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


