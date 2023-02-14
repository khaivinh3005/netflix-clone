// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAUqYBTjPDyCG8mKAdGxZE-1F-F_42RtNQ',
  authDomain: 'netflix-clone-132c7.firebaseapp.com',
  projectId: 'netflix-clone-132c7',
  storageBucket: 'netflix-clone-132c7.appspot.com',
  messagingSenderId: '643203137472',
  appId: '1:643203137472:web:c1f4e058c5096e29209225',
  measurementId: 'G-1BNR8C9XE6',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
