
// Audio Studio PRO - Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyBqF8stLK8CHFf9kOQ00ioKECwWv-0tfAc",
  authDomain: "audio-2fa4a.firebaseapp.com",
  projectId: "audio-2fa4a",
  storageBucket: "audio-2fa4a.firebasestorage.app",
  messagingSenderId: "82355342967",
  appId: "1:82355342967:web:90f097429d7ebce222c072",
  measurementId: "G-YSZBH4YQKJ"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firebase Authentication
const auth = firebase.auth();

// Firebase Storage
const storage = firebase.storage();

// Realtime Database will be initialized
// after adding the databaseURL from Firebase Console.

window.firebaseServices = {
  auth,
  storage,
  database: null
};
