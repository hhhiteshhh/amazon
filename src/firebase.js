import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiV2ZsN_cPGesNxUbGYBlgm05emlLjQWU",
  authDomain: "clone-6b7ec.firebaseapp.com",
  databaseURL: "https://clone-6b7ec.firebaseio.com",
  projectId: "clone-6b7ec",
  storageBucket: "clone-6b7ec.appspot.com",
  messagingSenderId: "801885702038",
  appId: "1:801885702038:web:13a0a26ad5e04adfc73fb7",
  measurementId: "G-QF4Y7FK265"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


