import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJxM-j_-MseUsKsAoKd2DCslHGHQi5VWA",
    authDomain: "lineclone-shin.firebaseapp.com",
    projectId: "lineclone-shin",
    storageBucket: "lineclone-shin.appspot.com",
    messagingSenderId: "145057458081",
    appId: "1:145057458081:web:901b1bd5bb86654d008de0"
});

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { auth, db };

