import firebase from "firebase/app";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyCyTa8C0S54SmDb3q8uBoqtfpZX6Sgnx70",
    authDomain: "vueblog-d1a5a.firebaseapp.com",
    projectId: "vueblog-d1a5a",
    storageBucket: "vueblog-d1a5a.appspot.com",
    messagingSenderId: "962523871715",
    appId: "1:962523871715:web:4c852783594dad071a08d6",
    measurementId: "G-EJJ0S46Y78"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {timestamp};
  export default firebaseApp.firestore();