import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDP3lj-NWP40Dkff7xOrbFs3J-fqjOHPcQ",
    authDomain: "testelopes-1921.firebaseapp.com",
    projectId: "testelopes-1921",
    storageBucket: "testelopes-1921.appspot.com",
    messagingSenderId: "533818037682",
    appId: "1:533818037682:web:b374d96663a2a976f100ab"

};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)