import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2C4dE0GGSR_8Ua9LW5olsFfDrXIHUfKA',
  authDomain: 'twitter-clone-b0eeb.firebaseapp.com',
  databaseURL: 'https://twitter-clone-b0eeb.firebaseio.com',
  projectId: 'twitter-clone-b0eeb',
  storageBucket: 'twitter-clone-b0eeb.appspot.com',
  messagingSenderId: '614814909604',
  appId: '1:614814909604:web:deeaef0c1d4231815bd231',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
