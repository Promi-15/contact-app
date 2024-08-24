// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRc19zpcuoj2zNW7snd9lv3Gl8pySKs-0",
  authDomain: "contact-app-vite-fdd45.firebaseapp.com",
  projectId: "contact-app-vite-fdd45",
  storageBucket: "contact-app-vite-fdd45.appspot.com",
  messagingSenderId: "358988720867",
  appId: "1:358988720867:web:65f751a6f4f0ac72dcf3d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)