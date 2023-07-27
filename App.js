import React from 'react'

import logo from './logo.svg';
import './App.css';

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


function Submit() {
  return (
    <button>SUBMIT</button>
  );
}
function SelectFile() {
  return (
    <button>SELECT A PHOTO</button>
  );
}
function InputVIN() {
  return(
    <input type="text" placeholder="VIN NUMBER"></input>
    );
}
function Check() {
  return (
    <button>CHECK</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      Written by Orkun
      <header>
        <h1>MOMO Car Identifier</h1>
      </header>
      <div>
        <h2>Add Record</h2>
        <div>
          <h3>Enter VIN Number</h3>
          <InputVIN id="addRecord"/>
        </div>
        <div>
          <h3>Upload Photo</h3>
          <SelectFile />
        </div>
        <Submit />
      </div>
      <div>
        <h2>Check Record</h2>
        <InputVIN id="checkRecord"/><br/>
        <Check />
      </div>
    </div>
  );
}

export default App;
