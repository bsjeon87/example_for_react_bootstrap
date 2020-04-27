
import  firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDeFhzet81FR-zeDJjtcd0JnL1Gyc9dEVM",
  authDomain: "test-e7813.firebaseapp.com",
  databaseURL: "https://test-e7813.firebaseio.com",
  projectId: "test-e7813",
  storageBucket: "test-e7813.appspot.com",
  messagingSenderId: "556476269300",
  appId: "1:556476269300:web:0becc527eac6bc5426d4a1",
  measurementId: "G-0JMLFN610J"
};

firebase.initializeApp(firebaseConfig);
const firestore = new firebase.firestore();

export {firestore}
