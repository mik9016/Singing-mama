import firebase from 'firebase'
import env from 'react-dotenv'



const firebaseConfig = {
    apiKey: env.REACT_API_KEY,
    authDomain: env.REACT_AUTH_DOMAIN,
    databaseURL: env.DATABASE_URL,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDER_ID,
    appId: env.APP_ID,
    measurementId: env.MEASURMENT_ID
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;