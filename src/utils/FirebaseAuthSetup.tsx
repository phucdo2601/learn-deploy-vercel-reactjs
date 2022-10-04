// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LoginApi from "../apis/login/LoginApi";
import { TokenLogin } from '../models/TokenLogin';
// TODO: Add SDKs for Firebase products that you want to use authenticate 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCmtHrLLsQzRUjhkPwDBlELKNsBsmqNnGs",
  authDomain: "ct-22-lecsalconfirmms.firebaseapp.com",
  projectId: "ct-22-lecsalconfirmms",
  storageBucket: "ct-22-lecsalconfirmms.appspot.com",
  messagingSenderId: "523865367806",
  appId: "1:523865367806:web:26c0912c80ca552365f1af"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// export const provider = new GoogleAuthProvider();


