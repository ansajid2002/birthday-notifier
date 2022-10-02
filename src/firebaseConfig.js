import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage" //for file storage

const firebaseConfig = {
  apiKey: "AIzaSyACMORFOpk2xXVU10dcggGEPz-ZibOWsmM",
  authDomain: "birthdaynotifier-a2cb2.firebaseapp.com",
  projectId: "birthdaynotifier-a2cb2",
  storageBucket: "birthdaynotifier-a2cb2.appspot.com",
  messagingSenderId: "822894934249",
  appId: "1:822894934249:web:5b233747664c1698395878",
  measurementId: "G-QFNRPM08RZ"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app) 
export const storage = getStorage(app)