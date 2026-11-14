// Audio Studio PRO - Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyBqF8stLK8CHFf9kOQ00ioKECwWv-0tfAc",
  authDomain: "audio-2fa4a.firebaseapp.com",
  databaseURL: "https://audio-2fa4a-default-rtdb.firebaseio.com",
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

// Initialize Firebase services
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// Make services available globally
window.firebaseServices = {
  auth,
  database,
  storage
};

console.log("Audio Studio PRO Firebase initialized successfully");
