// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJunDoFqdleeJ_OSmFRDibsydOl66FAbc",
  authDomain: "buddy-bodega.firebaseapp.com",
  projectId: "buddy-bodega",
  storageBucket: "buddy-bodega.appspot.com",
  messagingSenderId: "554240532647",
  appId: "1:554240532647:web:a48bcd49820ef422137b82"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;