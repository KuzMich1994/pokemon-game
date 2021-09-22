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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data);
  }
};

export default Firebase;
