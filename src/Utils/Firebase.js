// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1zhBQUgVhSKWSWaNl2XcP67cPzYaeEag",
  authDomain: "netflixgpt-cfb87.firebaseapp.com",
  projectId: "netflixgpt-cfb87",
  storageBucket: "netflixgpt-cfb87.appspot.com",
  messagingSenderId: "1052150478022",
  appId: "1:1052150478022:web:577665e177bb2629b813c7",
  measurementId: "G-ZPBKBF4MVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
