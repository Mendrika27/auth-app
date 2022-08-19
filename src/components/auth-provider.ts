// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2aHgwCx50tRbQiZzjI5S9VdgpeSRI57E",
  authDomain: "auth-test-login.firebaseapp.com",
  projectId: "auth-test-login",
  storageBucket: "auth-test-login.appspot.com",
  messagingSenderId: "692915106252",
  appId: "1:692915106252:web:c5e0b0eb61c029cc926d69",
  measurementId: "G-0XDE5VJ6NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export function createUser(mdp:string,email:string){
    createUserWithEmailAndPassword(auth,email,mdp).then().catch((err)=>{console.log(err)});
}
export function authentification(mdp:string,email:string){
  signInWithEmailAndPassword(auth,email,mdp).then((credential)=>{console.log("ok bro")}).catch();
}