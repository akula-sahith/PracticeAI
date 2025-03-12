// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔹 Replace this with your Firebase config
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
const provider = new GoogleAuthProvider();

// 🔹 Handle Email/Password Login
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect after login
        })
        .catch((error) => {
            document.getElementById("error-message").innerText = error.message;
        });
});

// 🔹 Handle Google Login
document.getElementById("google-login").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Google Login Successful!");
            window.location.href = "dashboard.html"; // Redirect after login
        })
        .catch((error) => {
            document.getElementById("error-message").innerText = error.message;
        });
});

// 🔹 Handle Sign-Up (Redirect to sign-up page)
document.getElementById("signup-link").addEventListener("click", () => {
    window.location.href = "signup.html";
});
