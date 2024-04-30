// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJfWkVxoQeH9ei1JSrs0d5DGEZbHQCZy4",
  authDomain: "loginreactnative-d20a1.firebaseapp.com",
  projectId: "loginreactnative-d20a1",
  storageBucket: "loginreactnative-d20a1.appspot.com",
  messagingSenderId: "66221591726",
  appId: "1:66221591726:web:6206ddc29649538147f13f",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };
