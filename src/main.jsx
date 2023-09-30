import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIgc3_o5UNIwph9dGf41hemvp_-EP8fo",
  authDomain: "react-coder-f0da8.firebaseapp.com",
  projectId: "react-coder-f0da8",
  storageBucket: "react-coder-f0da8.appspot.com",
  messagingSenderId: "105443979700",
  appId: "1:105443979700:web:8093f741c27443c9acc2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
