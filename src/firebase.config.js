import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBrxuunlQJ5R2ko4_EWrPPmcEMLRK318_g',
  authDomain: 'registration-users.firebaseapp.com',
  projectId: 'registration-users',
  storageBucket: 'registration-users.appspot.com',
  messagingSenderId: '688338825898',
  appId: '1:688338825898:web:942b9b19689291fe31d6d3',
  measurementId: 'G-SSLP7DD39V',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
