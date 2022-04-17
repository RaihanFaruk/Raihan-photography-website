import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYA85JmJ7AEtG7u0C_crWT12j20QTIAQw",
  authDomain: "asighnment-project.firebaseapp.com",
  projectId: "asighnment-project",
  storageBucket: "asighnment-project.appspot.com",
  messagingSenderId: "447854980910",
  appId: "1:447854980910:web:aae0a1bf250485fbd8d4bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
