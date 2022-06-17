import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV2U9VzRAp-Kes87ahtLZ74L2a2XABmcI",
  authDomain: "pggb-dace4.firebaseapp.com",
  projectId: "pggb-dace4",
  storageBucket: "pggb-dace4.appspot.com",
  messagingSenderId: "124320603531",
  appId: "1:124320603531:web:dc36cda9b85ae9da6b638e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()