// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBT1Kjiwgj4vD1j5FVyWWOrKzoKdfjeQ94',
  authDomain: 'project-ver2-9966b.firebaseapp.com',
  databaseURL: 'https://project-ver2-9966b-default-rtdb.firebaseio.com',
  projectId: 'project-ver2-9966b',
  storageBucket: 'project-ver2-9966b.appspot.com',
  messagingSenderId: '227374062884',
  appId: '1:227374062884:web:ccd9955f22d717e13127b1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
