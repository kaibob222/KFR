// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJoxVgV4UiDdx9aybEsXk1xXbTd6L_nWQ",
    authDomain: "kfr-project.firebaseapp.com",
    projectId: "kfr-project",
    storageBucket: "kfr-project.appspot.com",
    messagingSenderId: "795431795731",
    appId: "1:795431795731:web:391765f37c2ebf278153e6",
    measurementId: "G-P20H18LYLB"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };