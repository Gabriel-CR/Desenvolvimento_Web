"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
// Import the functions you need from the SDKs you need

// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAnSSvDuwSPzd6FbKn49dpuy9IsC6-6ea8",
  authDomain: "web-t03-47bf1.firebaseapp.com",
  projectId: "web-t03-47bf1",
  storageBucket: "web-t03-47bf1.appspot.com",
  messagingSenderId: "535034925884",
  appId: "1:535034925884:web:462ae775aed2b2258c8439"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
var _default = db;
exports["default"] = _default;