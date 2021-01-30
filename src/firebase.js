import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyADBkpBKq-PyHN6ewbiYyX_Xkznp1E4SU0",
    authDomain: "singing-mama.firebaseapp.com",
    databaseURL: "https://singing-mama-default-rtdb.firebaseio.com",
    projectId: "singing-mama",
    storageBucket: "singing-mama.appspot.com",
    messagingSenderId: "386315161024",
    appId: "1:386315161024:web:492e2805e3bfb213e98c25",
    measurementId: "G-62PMPZEXVQ"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;