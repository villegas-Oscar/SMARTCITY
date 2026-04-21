import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js"; 
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDpWM1I-9Z1Lnv2qfyshpEgbConlQV4kfw",
    authDomain: "smart-city-f92fa.firebaseapp.com",
    projectId: "smart-city-f92fa",
    storageBucket: "smart-city-f92fa.firebasestorage.app",
    messagingSenderId: "1024600601094",
    appId: "1:1024600601094:web:8b71b5b6290b8b01754987"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}