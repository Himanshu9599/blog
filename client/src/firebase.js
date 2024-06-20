// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bed9a.firebaseapp.com",
  projectId: "mern-blog-bed9a",
  storageBucket: "mern-blog-bed9a.appspot.com",
  messagingSenderId: "704177727796",
  appId: "1:704177727796:web:7fa1baa0070e5061105d61",
  measurementId: "G-NY296MN828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
let analytics;
isSupported().then((isSupported) => {
  if (isSupported) {
    analytics = getAnalytics(app);
  }
});

export { app, analytics };
