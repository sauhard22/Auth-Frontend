import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBu-oa2534lA84yThqY2z0m3b082QYXmnc",
    authDomain: "loginauth-b6c5f.firebaseapp.com",
    projectId: "loginauth-b6c5f",
    storageBucket: "loginauth-b6c5f.appspot.com",
    messagingSenderId: "962682302916",
    appId: "1:962682302916:web:f98ce4bd5f3859b8a17491",
    measurementId: "G-GNBEQFTFKP"
})

export const auth = app.auth()
export default app