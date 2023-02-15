import React from "react";
import PokemonList from "../PokemonList/PokemonList.component";
import {POKEMONS_DATA as DATA} from "../PokeList/pokeList";

const Pokemons = () => {

  return (
    <>
      <PokemonList data={DATA}/> 
    </>
  );
};

export default Pokemons;
