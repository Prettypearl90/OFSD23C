// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCY_PSsBmIeva9HB4mZTAXB6MHDgZk_mZw",
//   authDomain: "react-fb-auth-88bea.firebaseapp.com",
//   projectId: "react-fb-auth-88bea",
//   storageBucket: "react-fb-auth-88bea.appspot.com",
//   messagingSenderId: "64123240222",
//   appId: "1:64123240222:web:10eb95d573dec17500d30f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCY_PSsBmIeva9HB4mZTAXB6MHDgZk_mZw",
      authDomain: "react-fb-auth-88bea.firebaseapp.com",
      projectId: "react-fb-auth-88bea",
      storageBucket: "react-fb-auth-88bea.appspot.com",
      messagingSenderId: "64123240222",
      appId: "1:64123240222:web:10eb95d573dec17500d30f"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
