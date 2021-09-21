import { Route, Switch, useRouteMatch } from "react-router";
import StartPage from "./routes/StartPage";
import BoardPage from "./routes/BoardPage";
import FinishPage from "./routes/FinishPage";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {

  const match = useRouteMatch();
  const handleSelectedPokemons = () => {
    console.log('###: handleSelectedPokemons');
  };

  return (
    <PokemonContext.Provider value={{
      pokemon: [],
      onSelectedPokemons: handleSelectedPokemons,
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} exact component={BoardPage} />
        <Route path={`${match.path}/finish`} exact component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;