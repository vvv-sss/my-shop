import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA-XT7W8G3I-FoVmMXFR6NtnFg83vfwMAM",
    authDomain: "my-shop-94e01.firebaseapp.com",
    projectId: "my-shop-94e01",
    storageBucket: "my-shop-94e01.appspot.com",
    messagingSenderId: "596234972158",
    appId: "1:596234972158:web:89629f1077737874352eaf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);