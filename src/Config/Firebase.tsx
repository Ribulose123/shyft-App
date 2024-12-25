// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8G-U9kGm9lUIURP7eTTPZ15MPDqONSWw",
  authDomain: "shyft-app-8f8e8.firebaseapp.com",
  projectId: "shyft-app-8f8e8",
  storageBucket: "shyft-app-8f8e8.firebasestorage.app",
  messagingSenderId: "760191576493",
  appId: "1:760191576493:web:12bbf48e32d9e92f5dd924",
  measurementId: "G-33EZGXQBLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };