// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRaKkwVvG28VPVVbsUfIacc-U7KXQ-Kpw",
  authDomain: "twitter-clone-65a37.firebaseapp.com",
  projectId: "twitter-clone-65a37",
  storageBucket: "twitter-clone-65a37.appspot.com",
  messagingSenderId: "299047034009",
  appId: "1:299047034009:web:38a2fe772386d32a44ac08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);
