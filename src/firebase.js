import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCRoVKH6kDLZ2XlrkGLzN_V-xZbjJEDO6E",
    authDomain: "clone-fbdcf.firebaseapp.com",
    databaseURL: "https://clone-fbdcf.firebaseio.com",
    projectId: "clone-fbdcf",
    storageBucket: "clone-fbdcf.appspot.com",
    messagingSenderId: "689961689166",
    appId: "1:689961689166:web:64192e82a9d3c79a5ee31f",
    measurementId: "G-Y0LDNNC146"
})

const auth = firebase.auth();

export { auth };