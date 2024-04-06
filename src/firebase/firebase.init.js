// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3jZQkE0PNfdkmvQbzoUt-rUIVpCxfooE",
  authDomain: "dragon-news-react-au.firebaseapp.com",
  projectId: "dragon-news-react-au",
  storageBucket: "dragon-news-react-au.appspot.com",
  messagingSenderId: "290865931694",
  appId: "1:290865931694:web:2c651d2a3b1db7426f143f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
