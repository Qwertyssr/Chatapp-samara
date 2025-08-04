import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAike8P9V6-rfNx7dP7ADoOGBEM9VffL2s",
  authDomain: "chatapp-d498d.firebaseapp.com",
  projectId: "chatapp-d498d",
  storageBucket: "chatapp-d498d.appspot.com",
  messagingSenderId: "175405674228",
  appId: "1:175405674228:web:4d47bc9b72cab7524378a1",
  measurementId: "G-K787PLVCBD"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);
