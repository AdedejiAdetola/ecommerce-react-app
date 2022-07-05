import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBBTb2gah6onBScRrHMECXyptAp4vPr5w0",
    authDomain: "crown-clothing-db-1dbcb.firebaseapp.com",
    projectId: "crown-clothing-db-1dbcb",
    storageBucket: "crown-clothing-db-1dbcb.appspot.com",
    messagingSenderId: "578238147271",
    appId: "1:578238147271:web:9a7ce7a600722b6826ece2",
    measurementId: "G-7VDQHDWM7F"
  };

  //initialize firebase
  firebase.initializeApp(config);

  //export auth for authentication
  export const auth = firebase.auth();

  //export firestore for storage
  export const firestore = firebase.firestore();

  //set up google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;