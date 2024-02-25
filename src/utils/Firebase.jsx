// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDp92lVBj7yc7zpPxUGahxFRHZHQj-HP4",
  authDomain: "netflixgpt-52018.firebaseapp.com",
  projectId: "netflixgpt-52018",
  storageBucket: "netflixgpt-52018.appspot.com",
  messagingSenderId: "237826712365",
  appId: "1:237826712365:web:1d5baa742e47c82253e9a4",
  measurementId: "G-D7D343NHVT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
