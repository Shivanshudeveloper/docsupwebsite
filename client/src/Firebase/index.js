import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/messaging";
import "firebase/analytics";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBy6lD4kmHrmefimUjfWbKjSpfwUISsbiY",
    authDomain: "house-of-plug-f88cc.firebaseapp.com",
    projectId: "house-of-plug-f88cc",
    storageBucket: "house-of-plug-f88cc.appspot.com",
    messagingSenderId: "422644064949",
    appId: "1:422644064949:web:fe94c24c1102848a2894fc",
    measurementId: "G-JD027018HM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const storage = firebase.storage();
const database = firebase.database();
const auth = firebase.auth();
const firestore = firebase.firestore();

// Authentication for Google
var googleProvider = new firebase.auth.GoogleAuthProvider();
// Authentication for Facebook
var facebookProvider = new firebase.auth.FacebookAuthProvider();
// Authentication for Twitter
var twitterProvider = new firebase.auth.TwitterAuthProvider();

export {
    firestore, auth, googleProvider, facebookProvider, twitterProvider, database, storage, firebase as default
}