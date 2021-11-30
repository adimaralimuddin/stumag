

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpEvWLi_v087TzTYubZH4n262lpPY7-mk",
    authDomain: "prestumag.firebaseapp.com",
    projectId: "prestumag",
    storageBucket: "prestumag.appspot.com",
    messagingSenderId: "321910066597",
    appId: "1:321910066597:web:2f5ffc459856041822ac4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 const db = getFirestore(app)
 export default db