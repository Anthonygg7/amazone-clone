import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAiApJua6GSOU6Jl-jUojKRY8WCnpijDNk",
    authDomain: "clone-d47f1.firebaseapp.com",
    databaseURL: "https://clone-d47f1.firebaseio.com",
    projectId: "clone-d47f1",
    storageBucket: "clone-d47f1.appspot.com",
    messagingSenderId: "735843619462",
    appId: "1:735843619462:web:54854b476219f238b63707",
    measurementId: "G-2ZGY20G0C5",
});

const auth = firebase.auth();

export { auth };