import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCU7dVe3qdTBbVM8Y7eEUku_0ktK4-FUPk",
    authDomain: "investors-contactform.firebaseapp.com",
    projectId: "investors-contactform",
    storageBucket: "investors-contactform.appspot.com",
    messagingSenderId: "806793650147",
    appId: "1:806793650147:web:8554e4711974a22809cad6"
});

var db = firebaseApp.firestore();

export { db };