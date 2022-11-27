import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASWACoio-cQEnSMDlkssc6uzGRoMxcC3E",
  authDomain: "cart-9e18b.firebaseapp.com",
  projectId: "cart-9e18b",
  storageBucket: "cart-9e18b.appspot.com",
  messagingSenderId: "738973891107",
  appId: "1:738973891107:web:e1e008157787a8fd19cf96"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

