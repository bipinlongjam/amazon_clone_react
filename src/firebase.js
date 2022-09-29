// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDb5X50gLffN1wwMCUeNlysMk7hnKIOL2Q",
    authDomain: "challenge-6be6f.firebaseapp.com",
    projectId: "challenge-6be6f",
    storageBucket: "challenge-6be6f.appspot.com",
    messagingSenderId: "494687469379",
    appId: "1:494687469379:web:5e6d44efa89aa2cf1939f6",
    measurementId: "G-JP5N96L2YB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };