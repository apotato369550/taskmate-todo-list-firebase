// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARs9_r06s5VzgDxi_YZZmoSF2bWQxeJUg",
  authDomain: "sample-login-system-c9939.firebaseapp.com",
  projectId: "sample-login-system-c9939",
  storageBucket: "sample-login-system-c9939.appspot.com",
  messagingSenderId: "1032836128371",
  appId: "1:1032836128371:web:f603f1c7f355b4ab411406",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db}
