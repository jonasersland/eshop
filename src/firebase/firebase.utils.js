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

  export const createUserProfileDocument = async (userAuth, otherData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        }catch(error){
            console.log('error creating user');
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;