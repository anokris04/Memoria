// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "memoria-592b0.firebaseapp.com",
  projectId: "memoria-592b0",
  storageBucket: "memoria-592b0.appspot.com",
  messagingSenderId: "267698032610",
  appId: "1:267698032610:web:c0141c6107b9bb54b6b3bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);