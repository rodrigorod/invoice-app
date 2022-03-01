import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBo-O87_qIQ5eDU40izkuO8hSducrrzmOQ",
  authDomain: "vinvoicer.firebaseapp.com",
  projectId: "vinvoicer",
  storageBucket: "vinvoicer.appspot.com",
  messagingSenderId: "1089445388053",
  appId: "1:1089445388053:web:7fb766fa2f6a42635b131c"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
