import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjGKiyqnhFk6O8A12izv8-3JTCEvMtO8I",
  authDomain: "huncho-blog.firebaseapp.com",
  projectId: "huncho-blog",
  storageBucket: "huncho-blog.appspot.com",
  messagingSenderId: "401131728795",
  appId: "1:401131728795:web:43d18853c8b28a7ea13b3e",
  measurementId: "G-BMLVHYZYTD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
