import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdmrBQHcEoWUsNyPPdUFilzyvZRTxLGZY",
  authDomain: "netflixdemo-1bbbf.firebaseapp.com",
  projectId: "netflixdemo-1bbbf",
  storageBucket: "netflixdemo-1bbbf.appspot.com",
  messagingSenderId: "1082224904659",
  appId: "1:1082224904659:web:7374309d90c34876e98726"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
