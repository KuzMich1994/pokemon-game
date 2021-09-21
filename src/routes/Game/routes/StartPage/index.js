
import { useState, useEffect, useContext } from "react";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import Layout from '../../../../components/Layout/Layout.jsx';
import s from './style.module.css';
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  console.log('pokemonContext: ', pokemonContext);
  const [pokemons, setPokemonState] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemonState(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    console.log(pokemons);
    setPokemonState(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }));
  };


  return (
    <>
      <Layout title='Game-page'>

        <button className={s.centeredButton}>Start Game</button>
  
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
                isSelect={selected}
                onChangeIsActive={() => handleChangeSelected(key)}
                isActive={true}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
};

export default StartPage;