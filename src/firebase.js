// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAUbwlVH0cE13T_pf2gy9ZM1xI7VLgR-M",
  authDomain: "clonereact-f921f.firebaseapp.com",
  projectId: "clonereact-f921f",
  storageBucket: "clonereact-f921f.appspot.com",
  messagingSenderId: "919038496148",
  appId: "1:919038496148:web:5c25154f65a6e19eafd381",
  measurementId: "G-FXZBMKM94L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };