// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDb5X50gLffN1wwMCUeNlysMk7hnKIOL2Q",
//   authDomain: "challenge-6be6f.firebaseapp.com",
//   projectId: "challenge-6be6f",
//   storageBucket: "challenge-6be6f.appspot.com",
//   messagingSenderId: "494687469379",
//   appId: "1:494687469379:web:5e6d44efa89aa2cf1939f6",
//   measurementId: "G-JP5N96L2YB"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyCAUbwlVH0cE13T_pf2gy9ZM1xI7VLgR-M",
//   authDomain: "clonereact-f921f.firebaseapp.com",
//   projectId: "clonereact-f921f",
//   storageBucket: "clonereact-f921f.appspot.com",
//   messagingSenderId: "919038496148",
//   appId: "1:919038496148:web:5c25154f65a6e19eafd381",
//   measurementId: "G-FXZBMKM94L"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxXaKXMevNiTpbmj0jIJl6GHDgxdaf6yk",
  authDomain: "clone-b219a.firebaseapp.com",
  projectId: "clone-b219a",
  storageBucket: "clone-b219a.appspot.com",
  messagingSenderId: "142433137970",
  appId: "1:142433137970:web:3175b0f2ea578b1613932b",
  measurementId: "G-5H7K6WGHFF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };