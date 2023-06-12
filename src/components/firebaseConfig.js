import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApPLWz2kR3z0CANLlFazpL1V4Gc_6EGSg",
  authDomain: "site-decolads.firebaseapp.com",
  projectId: "site-decolads",
  storageBucket: "site-decolads.appspot.com",
  messagingSenderId: "489443417557",
  appId: "1:489443417557:web:f91d3f86651e6e029fb15c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);