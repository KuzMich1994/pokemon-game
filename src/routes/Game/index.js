import { useHistory } from "react-router";
import { useState } from "react";
import POKEMON_LIST from '../../api/pokemon-list.json';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Layout from '../../components/Layout/Layout.jsx';
import s from './style.module.css';

const GamePage = () => {

  const history = useHistory();
  const [pokemons, setPokemonState] = useState(POKEMON_LIST.slice(0, 5));

  const handlePokemonChangeIsActive = (id) => {
    setPokemonState(prev => 
      prev.map(item => item.id === id ? {...item, active: !item.active} : item)
    );
  };

  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <button onClick={handleClick}>Home Page</button>
      <Layout title='Game-page'>
  
        <div className={s.flex}>
          {
            pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                values={pokemon.values}
                name={pokemon.name}
                type={pokemon.type}
                id={pokemon.id}
                img={pokemon.img}
                onChangeIsActive={handlePokemonChangeIsActive}
                isActive={pokemon.active}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;