// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLaahBA8suCHDE4Axi15oNRahCXog3I8",
  authDomain: "linkdin-clone-84e66.firebaseapp.com",
  projectId: "linkdin-clone-84e66",
  storageBucket: "linkdin-clone-84e66.appspot.com",
  messagingSenderId: "792934504994",
  appId: "1:792934504994:web:fa7826767b36708acd087b",
  measurementId: "G-16R4X6EBG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);