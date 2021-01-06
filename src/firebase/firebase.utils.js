import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCm89xDZcN1AwYXtVsXXBHb97YihtYdWo0",
    authDomain: "crown-db-77a2d.firebaseapp.com",
    projectId: "crown-db-77a2d",
    storageBucket: "crown-db-77a2d.appspot.com",
    messagingSenderId: "951652474440",
    appId: "1:951652474440:web:30724117386e255e06427d",
    measurementId: "G-Z8H3LG4BJZ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;