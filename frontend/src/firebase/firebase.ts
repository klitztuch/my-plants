// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore/lite";
import {config} from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(config);
export const auth = getAuth(app);
const db = getFirestore(app);
export const userDoc = doc(db, "users");

const analytics = getAnalytics(app);