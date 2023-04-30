// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage,getStream} from 'firebase/storage'
import { ref as storageRef } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBubTgvjQUt_VF1WIX_3Jef6COlQRFFLLA",
  authDomain: "imageupload-8725b.firebaseapp.com",
  projectId: "imageupload-8725b",
  storageBucket: "imageupload-8725b.appspot.com",
  messagingSenderId: "885892863360",
  appId: "1:885892863360:web:bf0009059826050a4edd65",
  measurementId: "G-5NB3X861CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export { storageRef }


