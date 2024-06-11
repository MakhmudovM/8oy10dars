// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-vwPhU-LinxlsqgbrW5kMPlkyKNropzw",
  authDomain: "exam-test-e6d7e.firebaseapp.com",
  projectId: "exam-test-e6d7e",
  storageBucket: "exam-test-e6d7e.appspot.com",
  messagingSenderId: "312200628513",
  appId: "1:312200628513:web:b5ff93c2e4dcbb56db5660",
  measurementId: "G-8PHL7BF52E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
