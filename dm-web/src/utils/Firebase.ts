import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // // databeseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // // measurementId: process.env.FIREBASE_MEASUREMENT_ID,

  apiKey: "AIzaSyA0Q4lz7KxLdWui1UNmW4WqP3rjJhui4jM",
  authDomain: "do-mission-auth.firebaseapp.com",
  projectId: "do-mission-auth",
  storageBucket: "do-mission-auth.appspot.com",
  messagingSenderId: "168486738031",
  appId: "1:168486738031:web:f2d52e7c82559df074d59a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

// firebase.appsをチェックし、ロードされているかどうかを確認。
// なければinitializeAppを実行
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// export default firebase;
