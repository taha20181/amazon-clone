import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-k7r2aC_JY0IyUGNrkcd0xVtldnk9j7M",
  authDomain: "clone-2e6c5.firebaseapp.com",
  databaseURL: "https://clone-2e6c5.firebaseio.com",
  projectId: "clone-2e6c5",
  storageBucket: "clone-2e6c5.appspot.com",
  messagingSenderId: "177795209104",
  appId: "1:177795209104:web:080ca4f7fef565199b4515",
  measurementId: "G-XT6RDTXE0J"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};