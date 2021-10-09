import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZqlRme3oT2N3VPyJx_DBfJue15pHRui4",
    authDomain: "bug-tracker-3c0b4.firebaseapp.com",
    projectId: "bug-tracker-3c0b4",
    storageBucket: "bug-tracker-3c0b4.appspot.com",
    messagingSenderId: "809509171115",
    appId: "1:809509171115:web:e3518f56b716433cdd6cee"
};
  
const app = initializeApp(firebaseConfig);

export default getFirestore(app)