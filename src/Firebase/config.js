import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBVNDeNLz8ZCw9nvTe-a2JtoxOJA7Xm9s0",
  authDomain: "firegram-photogallery-438bd.firebaseapp.com",
  databaseURL: "https://firegram-photogallery-438bd.firebaseio.com",
  projectId: "firegram-photogallery-438bd",
  storageBucket: "firegram-photogallery-438bd.appspot.com",
  messagingSenderId: "90861063494",
  appId: "1:90861063494:web:bcbc40f1a841c1e038a947"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timestamp};
  