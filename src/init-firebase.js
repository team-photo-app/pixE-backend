'use strict';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "pixe-b18c8.firebaseapp.com",
  databaseURL: "https://pixe-b18c8.firebaseio.com",
  projectId: "pixe-b18c8",
  storageBucket: "pixe-b18c8.appspot.com",
  messagingSenderId: "772685542389",
  appId: "1:772685542389:web:06237b2943b280490e26bc",
  measurementId: "G-13YXHDL4J0"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebaseConfig;