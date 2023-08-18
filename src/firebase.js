import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBRLaahBA8suCHDE4Axi15oNRahCXog3I8",
  authDomain: "linkdin-clone-84e66.firebaseapp.com",
  projectId: "linkdin-clone-84e66",
  storageBucket: "linkdin-clone-84e66.appspot.com",
  messagingSenderId: "792934504994",
  appId: "1:792934504994:web:fa7826767b36708acd087b",
  measurementId: "G-16R4X6EBG7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;