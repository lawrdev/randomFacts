import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDzbYeiWUQvA4KNFZRW5KjK77Ld8JJvul4",

    authDomain: "ajebo-randomfacts.firebaseapp.com",

    projectId: "ajebo-randomfacts",

    storageBucket: "ajebo-randomfacts.appspot.com",

    messagingSenderId: "650436328097",

    appId: "1:650436328097:web:3d54db5b2a4ff79df40ee0"

};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()