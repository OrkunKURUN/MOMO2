// Import the functions you need from the SDKs you need

import { firebase } from "firebase/app";

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBO_31WuNMjhnoXAzPHj6hb6Nc5Qa10YaI",

  authDomain: "momo2-6fada.firebaseapp.com",

  projectId: "momo2-6fada",

  storageBucket: "momo2-6fada.appspot.com",

  messagingSenderId: "289627134066",

  appId: "1:289627134066:web:094240fa37a21e209c0aeb",

  measurementId: "G-XRH5VJGDYB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
