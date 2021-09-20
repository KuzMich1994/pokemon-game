import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDKTvPRHRA9tcV_g_NaWhLQ_jAYA4JF8uM",
  authDomain: "pokemon-game-54f15.firebaseapp.com",
  projectId: "pokemon-game-54f15",
  storageBucket: "pokemon-game-54f15.appspot.com",
  messagingSenderId: "505072597252",
  appId: "1:505072597252:web:0c04387ea8466734eef851"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
