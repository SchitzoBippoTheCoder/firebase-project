// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from"firebase/storage";
import { connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator } from "firebase/firestore";
import { connectStorageEmulator } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlorionsVaKm4OJYsxHwAhcAmfRZxo1QU",
  authDomain: "ics4u-a224e.firebaseapp.com",
  projectId: "ics4u-a224e",
  storageBucket: "ics4u-a224e.appspot.com",
  messagingSenderId: "179433531079",
  appId: "1:179433531079:web:5000f7a8a25302232400e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(firestore, 'localhost', 8080);
connectStorageEmulator(storage, "localhost", 9199);

export { auth, firestore, storage }