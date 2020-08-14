import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBmQ2d0z4BPny2_RE_pHXZtHXEoHhs77_Y",
  authDomain: "notes-7b468.firebaseapp.com",
  databaseURL: "https://notes-7b468.firebaseio.com",
  projectId: "notes-7b468",
  storageBucket: "notes-7b468.appspot.com",
  messagingSenderId: "510016779935",
  appId: "1:510016779935:web:c770db2a428524af1f94aa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
