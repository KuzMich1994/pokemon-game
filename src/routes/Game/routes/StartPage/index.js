
import { useState, useEffect, useContext } from "react";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import Layout from '../../../../components/Layout/Layout.jsx';
import s from './style.module.css';
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useHistory } from "react-router";

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonsContext = useContext(PokemonContext);
  const history = useHistory();
  const [pokemons, setPokemonState] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemonState(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    const pokemon = {...pokemons[key]};
    pokemonsContext.onSelectedPokemons(key, pokemon);
    setPokemonState(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }));
  };

  const handleStartGameClick = () => {
    history.push('/game/board');
  };

  return (
    <>
      <Layout title='Game-page'>

        <button 
          onClick={handleStartGameClick} 
          className={s.centeredButton}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}
        >
          Start Game
        </button>
  
        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key, {img, name, type, id, values, selected}]) => (
              <PokemonCard
                className={s.card}
                key={key}
                values={values}
                name={name}
                type={type}
                id={id}
                img={img}
                isActive={true}
                isSelected={selected}
                handleClickCard={() => {
                  if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                    handleChangeSelected(key);
                  }
                }}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
};

export default StartPage;