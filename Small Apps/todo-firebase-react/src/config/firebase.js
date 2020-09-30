
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD7FkFeAA3D50qC09eVMboM-Nr8bLm7JsA",
  authDomain: "react-todo-b2f0d.firebaseapp.com",
  databaseURL: "https://react-todo-b2f0d.firebaseio.com",
  projectId: "react-todo-b2f0d",
  storageBucket: "react-todo-b2f0d.appspot.com",
  messagingSenderId: "5503554323",
  appId: "1:5503554323:web:eafbbd92bfd492de6b40e6",
  measurementId: "G-Q6HK9P8PMT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;