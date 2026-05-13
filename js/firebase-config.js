// 🔥 js/firebase-config.js - Configuré pour dedieno-demo
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getDatabase, 
  ref, 
  set, 
  onValue, 
  push, 
  update 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

// Export des fonctions utiles
export { ref, set, onValue, push, update };

