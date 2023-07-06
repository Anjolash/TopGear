import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA6agRDpa8FvYdeHM3beo1g_uYixAQF-Jw",
    authDomain: "auth-carstore-development.firebaseapp.com",
    projectId: "auth-carstore-development",
    storageBucket: "auth-carstore-development.appspot.com",
    messagingSenderId: "784512515028",
    appId: "1:784512515028:web:1fff0751ea7ec82a873441"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app as default}