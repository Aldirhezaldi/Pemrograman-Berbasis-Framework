import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHet_pXJJc2Rr7ChWaiir5TPcFBHSt6Rw",
    authDomain: "module-11-e7b2c.firebaseapp.com",
    projectId: "module-11-e7b2c",
    storageBucket: "module-11-e7b2c.appspot.com",
    messagingSenderId: "591312805267",
    appId: "1:591312805267:web:67a79b3611826b35bb1c66",
    measurementId: "G-MPE534L934"
  };
  
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;