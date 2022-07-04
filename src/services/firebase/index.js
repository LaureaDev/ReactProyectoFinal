import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD-iQarQ1WCKr-KQsp3NWDX90SjM1U-syE",
  authDomain: "ecommerreact.firebaseapp.com",
  projectId: "ecommerreact",
  storageBucket: "ecommerreact.appspot.com",
  messagingSenderId: "954783625247",
  appId: "1:954783625247:web:6cd5d66cd776820477e52a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)