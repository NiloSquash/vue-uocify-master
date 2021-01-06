import firebase  from 'firebase';

// ´'UOCIFY DE NILO
var firebaseConfig = {
    apiKey: "AIzaSyBnqIk4S9F6tC6rA7FtU0H_nrj3mF02dHo",
    authDomain: "uocify-1a340.firebaseapp.com",
    projectId: "uocify-1a340",
    storageBucket: "uocify-1a340.appspot.com",
    messagingSenderId: "892182584724",
    appId: "1:892182584724:web:227dd9111245a67f794381"
};

const app = firebase .initializeApp(firebaseConfig);

export const db = app.database();