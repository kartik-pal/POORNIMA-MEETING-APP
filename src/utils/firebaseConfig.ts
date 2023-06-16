import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQOSqM7iDU3x2TN8bL2gklfCYcNNfRqW0",
  authDomain: "zoomclone-21e75.firebaseapp.com",
  projectId: "zoomclone-21e75",
  storageBucket: "zoomclone-21e75.appspot.com",
  messagingSenderId: "719370000632",
  appId: "1:719370000632:web:bcf4159d09739e6af8c30d",
  measurementId: "G-KTBD2GT7PG"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");