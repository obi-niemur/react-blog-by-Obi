import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWNyXBxapxJYnZ4LWWTTDlkwLYaPv4WKY",
  authDomain: "my-react-blog-by-obi.firebaseapp.com",
  projectId: "my-react-blog-by-obi",
  storageBucket: "my-react-blog-by-obi.appspot.com",
  messagingSenderId: "850612257922",
  appId: "1:850612257922:web:2133f113e65b18f237a09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


