
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8rqOzIwK2ckOuezursGvSwk2gUBEgA7A",
  authDomain: "one-step-closer-bd.firebaseapp.com",
  projectId: "one-step-closer-bd",
  storageBucket: "one-step-closer-bd.firebasestorage.app",
  messagingSenderId: "108088083600",
  appId: "1:108088083600:web:6e8ac919877bf0d4838415",
  measurementId: "G-HCHY34M08N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const status = document.getElementById("backendStatus");

if (status) {
  status.textContent = "Firebase connected";
}
