// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCqOsOF9nXNDTdJq3qzz3ogAv6LFcMJjAY',
    authDomain: 'todo-api-18c6d.firebaseapp.com',
    projectId: 'todo-api-18c6d',
    storageBucket: 'todo-api-18c6d.appspot.com',
    messagingSenderId: '408094265782',
    appId: '1:408094265782:web:83d4c410bbef6619d1b117',
    measurementId: 'G-TY9JDJBKD9'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)
