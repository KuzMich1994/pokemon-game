import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import database from "../../services/firebase";
import { getDatabase, ref, set } from "firebase/database";
import POKEMON_LIST from '../../api/pokemon-list.json';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Layout from '../../components/Layout/Layout.jsx';
import s from './style.module.css';

const GamePage = () => {

  const history = useHistory();
  const [pokemons, setPokemonState] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemonState(snapshot.val());
    })
  }, [pokemons]);

  const handlePokemonChangeIsActive = (id) => {
    setPokemonState(prevState => {
    return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
            pokemon.active = !pokemon.active;
        };

        const db = getDatabase();

        acc[item[0]] = pokemon;
        
        set(ref(db, `pokemons/${item[0]}`), {...pokemon});

        return acc;
      }, {});
    });
  };

  const addNewPokemon = () => {
    const getRandom = (max) => {
      return Math.floor(Math.random() * max);
    };

    const randomId = getRandom(POKEMON_LIST.length);

    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(POKEMON_LIST[randomId]);
    
  };

  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <button onClick={handleClick}>Home Page</button>
      <Layout title='Game-page'>

        <button onClick={addNewPokemon} className={s.centeredButton}>Add new pokemon</button>
  
        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key, {img, name, type, id, values, active}]) => (
              <PokemonCard
                key={key}
                values={values}
                name={name}
                type={type}
                id={id}
                img={img}
                onChangeIsActive={handlePokemonChangeIsActive}
                isActive={active}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;