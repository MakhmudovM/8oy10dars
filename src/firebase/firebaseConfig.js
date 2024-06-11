// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export const auth = getAuth(app);
export const db = getFirestore(app);