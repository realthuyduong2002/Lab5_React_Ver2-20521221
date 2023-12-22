import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBd_enp30DGRMM0Y_cGhtyYC4Fp-ReGxiE",
    authDomain: "messaging-app-mern-adb0a.firebaseapp.com",
    projectId: "messaging-app-mern-adb0a",
    storageBucket: "messaging-app-mern-adb0a.appspot.com",
    messagingSenderId: "430979615630",
    appId: "1:430979615630:web:f519aa3392e98fbaa732df"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;