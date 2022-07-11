import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDUAyZCRaAUArwsgMT-MelV1pDL8DkH49s",
  authDomain: "classtest-3caee.firebaseapp.com",
  projectId: "classtest-3caee",
  storageBucket: "classtest-3caee.appspot.com",
  messagingSenderId: "279802192718",
  appId: "1:279802192718:web:21d35f57486153c77a741f"
};

let app = firebase.initializeApp(firebaseConfig);
export default app.database();