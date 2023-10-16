// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd4vFOIN8VhRGIvSudh36tN0obuCcT38o",
    authDomain: "firbase-client.firebaseapp.com",
    projectId: "firbase-client",
    storageBucket: "firbase-client.appspot.com",
    messagingSenderId: "701869997219",
    appId: "1:701869997219:web:05399054e55596767e1316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;