import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  // apiKey: "AIzaSyBRLaahBA8suCHDE4Axi15oNRahCXog3I8",
  // authDomain: "linkdin-clone-84e66.firebaseapp.com",
  // projectId: "linkdin-clone-84e66",
  // storageBucket: "linkdin-clone-84e66.appspot.com",
  // messagingSenderId: "792934504994",
  // appId: "1:792934504994:web:fa7826767b36708acd087b",
  // measurementId: "G-16R4X6EBG7"
  apiKey: "AIzaSyAhV9J2If8O--CbkjpK8HSBS-lx9hsmPGg",
  authDomain: "dummy-linkdinclone.firebaseapp.com",
  databaseURL: "https://dummy-linkdinclone-default-rtdb.firebaseio.com",
  projectId: "dummy-linkdinclone",
  storageBucket: "dummy-linkdinclone.appspot.com",
  messagingSenderId: "54556414542",
  appId: "1:54556414542:web:e984a9b7f1282ab962691f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;