import firebase from "firebase/app";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyD1hOzRJ04hHEkya55ei1ghxGwUoCPuIbI",
    authDomain: "vueblog-d69da.firebaseapp.com",
    projectId: "vueblog-d69da",
    storageBucket: "vueblog-d69da.appspot.com",
    messagingSenderId: "873291766538",
    appId: "1:873291766538:web:2e152ee3d3b72fb7bff8f3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {timestamp};
  export default firebaseApp.firestore();