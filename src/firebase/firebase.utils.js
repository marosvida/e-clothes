import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkRGTycj-hJ7502ZuW3FlW7RzJ5inX2lw",
    authDomain: "clothing-5bf22.firebaseapp.com",
    databaseURL: "https://clothing-5bf22.firebaseio.com",
    projectId: "clothing-5bf22",
    storageBucket: "clothing-5bf22.appspot.com",
    messagingSenderId: "951111269656",
    appId: "1:951111269656:web:62c95db34c2e8b9126726d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;