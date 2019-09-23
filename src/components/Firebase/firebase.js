import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZ_huQQYXDS7Fdkt_9P3vt8WHImv8oxPE",
    authDomain: "oddam-w-dobre-rece.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece.firebaseio.com",
    projectId: "oddam-w-dobre-rece",
    storageBucket: "oddam-w-dobre-rece.appspot.com",
    messagingSenderId: "188608119905",
    appId: "1:188608119905:web:2110a1ca9459d2a1319620"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
}
export default Firebase;