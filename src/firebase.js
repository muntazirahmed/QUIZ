import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLBqivNQQbvLCE0TDrxYi7m7kuHx-TCUo",
  authDomain: "chat-eca22.firebaseapp.com",
  projectId: "chat-eca22",
  storageBucket: "chat-eca22.appspot.com",
  messagingSenderId: "902558633888",
  appId: "1:902558633888:web:ba5520d7bb134ffd9f9ec5"
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();