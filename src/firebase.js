import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBRsAgfM2BbFtysBjqt7QFtwsj3I13UsMU",
  authDomain: "cloudnotebook-6f2c9.firebaseapp.com",
  projectId: "cloudnotebook-6f2c9",
  storageBucket: "cloudnotebook-6f2c9.appspot.com",
  messagingSenderId: "451671384820",
  appId: "1:451671384820:web:0e90e83c4b91adf19cf4a1"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore()