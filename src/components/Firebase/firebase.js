import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const Config = {
    apiKey: "AIzaSyDu7R79RpwpHjhlKiM0KGmG4Pv7ncYR2u0",
    authDomain: "pizza-rushvs.firebaseapp.com",
    databaseURL: "https://pizza-rushvs.firebaseio.com",
    projectId: "pizza-rushvs",
    storageBucket: "pizza-rushvs.appspot.com",
    messagingSenderId: "1000707605430",
    appId: "1:1000707605430:web:c988ea36f498b5aae43717",
    measurementId: "G-4CZ3GR4S6L"
};

firebase.initializeApp(Config);


export default firebase;



export const auth = firebase.auth();

