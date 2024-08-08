// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz_hW9qa4X5-28CqHG0EM9kti_AGPndPs",
  authDomain: "tododespedidas-212f2.firebaseapp.com",
  projectId: "tododespedidas-212f2",
  storageBucket: "tododespedidas-212f2.appspot.com",
  messagingSenderId: "25036909202",
  appId: "1:25036909202:web:c27911476a7b298aa9544b",
  measurementId: "G-NZEHEZDC7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);