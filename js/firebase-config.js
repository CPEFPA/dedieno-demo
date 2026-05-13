// 🔥 js/firebase-config.js - Version Auth + Export complet
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhlLLm1Vvl3U3JYFZ8rzJJW4pimYDQEEU",
  authDomain: "dedieno-demo.firebaseapp.com",
  databaseURL: "https://dedieno-demo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dedieno-demo",
  storageBucket: "dedieno-demo.firebasestorage.app",
  messagingSenderId: "1022260862453",
  appId: "1:1022260862453:web:76282a6be081fdeedb94bc"
};

// Initialisation
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

// Export des fonctions utiles
export { ref, set, onValue, push, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
