import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDcqGk_HzNk_MEIkM2IvNwNR8RQrdJ8djw',
    authDomain: 'chat-app-c7b2e.firebaseapp.com',
    projectId: 'chat-app-c7b2e',
    storageBucket: 'chat-app-c7b2e.appspot.com',
    messagingSenderId: '685697324493',
    appId: '1:685697324493:web:44b80f64261ced2468a084',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
