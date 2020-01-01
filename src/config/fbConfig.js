import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-analytics.js"></script>

{/* <script> */}
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMnVnkq-xtQLyJ685ES1YOI4ikGa4kvPo",
    authDomain: "react-firebasedb-af668.firebaseapp.com",
    databaseURL: "https://react-firebasedb-af668.firebaseio.com",
    projectId: "react-firebasedb-af668",
    storageBucket: "react-firebasedb-af668.appspot.com",
    messagingSenderId: "737564804542",
    appId: "1:737564804542:web:2f64d1df76ee4171b225ef",
    measurementId: "G-5DYG6J45G9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firestore = firebaseApp.firestore();
//   firebase.analytics();
// </script>

export default firebase;