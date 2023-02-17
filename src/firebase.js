import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsDG-Wu0EZNS0tOK6Gj4Qi0E5Id9Gs1sk",
  authDomain: "rehabilitation-site.firebaseapp.com",
  projectId: "rehabilitation-site",
  storageBucket: "rehabilitation-site.appspot.com",
  messagingSenderId: "654803452221",
  appId: "1:654803452221:web:7278ba17d137e299738554"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
