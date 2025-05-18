import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnWvbCYdinxIiHJ3cArwgcuC1Zhn7g1qw",
    authDomain: "prepwise-8dc3b.firebaseapp.com",
    projectId: "prepwise-8dc3b",
    storageBucket: "prepwise-8dc3b.firebasestorage.app",
    messagingSenderId: "120310747670",
    appId: "1:120310747670:web:381a04d55d2634ca3c5b37",
    measurementId: "G-S81JM0TD62"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);