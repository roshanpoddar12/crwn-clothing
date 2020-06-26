import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCapcJCx-OSMeTuNx61j2oOxbDnh0U5kCk",
    authDomain: "crown-db-19c96.firebaseapp.com",
    databaseURL: "https://crown-db-19c96.firebaseio.com",
    projectId: "crown-db-19c96",
    storageBucket: "crown-db-19c96.appspot.com",
    messagingSenderId: "815238862291",
    appId: "1:815238862291:web:6e816dfe6e432d2f918b26",
    measurementId: "G-WDDJGT0M68"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;