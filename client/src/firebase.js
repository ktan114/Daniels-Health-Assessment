const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBg0i6xtde1_pWNqBbpT8SZsLUB83D8PLY',
  authDomain: 'danielshealthassessment.firebaseapp.com',
  databaseURL: 'https://danielshealthassessment.firebaseio.com',
  projectId: 'danielshealthassessment',
  storageBucket: 'danielshealthassessment.appspot.com',
  messagingSenderId: '705826835416',
  appId: '1:705826835416:web:e47f62804dcd83c6ccc0ad',
  measurementId: 'G-XP5YTRN51W',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db;
