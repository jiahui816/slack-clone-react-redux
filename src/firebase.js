import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCl_p6hXkK66uFaODVvOfbsLN84YUIs2qE",
  authDomain: "the-slack-clone.firebaseapp.com",
  projectId: "the-slack-clone",
  storageBucket: "the-slack-clone.appspot.com",
  messagingSenderId: "182391950250",
  appId: "1:182391950250:web:32a0778cd4f4bab41739d3",
});

const db = firebaseApp.firestore();

export default db;
