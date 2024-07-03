
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAtRtKJxJF7vllbsoDr7oZZ-LSDA0DXZEM",
  authDomain: "arike-s-foundation.firebaseapp.com",
  projectId: "arike-s-foundation",
  storageBucket: "arike-s-foundation.appspot.com",
  messagingSenderId: "159769720122",
  appId: "1:159769720122:web:70800b4396f9c6b96c8c03",
  measurementId: "G-NDT72VPQ1P"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const db = getFirestore(app)
export const storage = getStorage(app)