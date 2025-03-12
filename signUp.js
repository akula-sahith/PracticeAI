import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDLFpQtAAb2pLMM9XCWTTHYRHLn60TFMdo",
    authDomain: "ai-resume-a87ef.firebaseapp.com",
    projectId: "ai-resume-a87ef",
    storageBucket: "ai-resume-a87ef.firebasestorage.app",
    messagingSenderId: "326233845289",
    appId: "1:326233845289:web:2d50d397395bb6aba6b638",
    measurementId: "G-GQXRRWPRHG"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Sign-Up Successful! Please Login.");
            window.location.href = "index.html";
        })
        .catch((error) => {
            document.getElementById("signup-error").innerText = error.message;
        });
});
