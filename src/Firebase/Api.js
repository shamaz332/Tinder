import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlzMEV69G8qDn0QGVuIzriNZQ6GjpIQ3Q",
  authDomain: "tinder-95e18.firebaseapp.com",
  projectId: "tinder-95e18",
  storageBucket: "tinder-95e18.appspot.com",
  messagingSenderId: "1078915951491",
  appId: "1:1078915951491:web:ed1d4f13730613ac34a4b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseDB = firebaseApp.firestore();

export default firebaseDB;
