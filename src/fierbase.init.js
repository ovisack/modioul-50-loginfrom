// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//  DO NOT sher config in  public

const firebaseConfig = {
  apiKey: "AIzaSyCeycRm3aBwTnR78QGbkuyC8bGVCe8Hz6o",
  authDomain: "email-password-auth-c53eb.firebaseapp.com",
  projectId: "email-password-auth-c53eb",
  storageBucket: "email-password-auth-c53eb.firebasestorage.app",
  messagingSenderId: "217992684486",
  appId: "1:217992684486:web:e6b0711724e05fa80c08c7",
  measurementId: "G-MN64PXJPS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
