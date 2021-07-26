import firebase from "firebase/app";
import "@firebase/firestore";
const app = firebase.initializeApp({
  apiKey: "AIzaSyAWH14qwg3ezh72y4PMY9hyMfkyO-dMIVg",
  authDomain: "instance-1ffbc.firebaseapp.com",
  projectId: "instance-1ffbc",
  storageBucket: "instance-1ffbc.appspot.com",
  messagingSenderId: "498019397136",
  appId: "1:498019397136:web:1adb9939007ca21cf4e495",
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
