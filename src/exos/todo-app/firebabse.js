// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWLgfq81CG-8SnFSJqNP1xQdXA8Wy0X6M',
  authDomain: 'todoapp-8ae0e.firebaseapp.com',
  projectId: 'todoapp-8ae0e',
  storageBucket: 'todoapp-8ae0e.appspot.com',
  messagingSenderId: '701015266159',
  appId: '1:701015266159:web:878563ebff3ab52d62ce9a',
  measurementId: 'G-PET6531JNP',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
