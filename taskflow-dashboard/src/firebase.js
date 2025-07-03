// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqbsd6areLWd38P895i83aFPqnXM0QpkI",
  authDomain: "taskflow-84e54.firebaseapp.com",
  projectId: "taskflow-84e54",
  storageBucket: "taskflow-84e54.firebasestorage.app",
  messagingSenderId: "1080375441835",
  appId: "1:1080375441835:web:9007b41c7101460d9c3aee"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
