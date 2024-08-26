import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js'

  const firebaseConfig = {
    apiKey: "AIzaSyA7FrpKDMRke8CYOlaW-riiiksDAb16PAA",
    authDomain: "fir-in-javascript.firebaseapp.com",
    projectId: "fir-in-javascript",
    storageBucket: "fir-in-javascript.appspot.com",
    messagingSenderId: "153208566445",
    appId: "1:153208566445:web:bd185fa1f74429a2ce8c24"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{ auth, createUserWithEmailAndPassword}