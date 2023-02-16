import React from "react";
import PokemonItem from "../PokemonItem/PokemonItem.component";
import s from './style.module.css';
import {POKEMONS_DATA as DATA} from "../../data/pokeList";

const PokemonList = () => (
    <div className={s.cards}>
        {DATA.map((item, idx) => {
          const {
            id,
            name,
            img,
            imgShiny,
            types
          } = item;
          return (
              <PokemonItem
                key={idx}
                id={id}
                name={name}
                img={img}
                imgShiny={imgShiny}
                types={types}
                
              />
          );
        })}
    </div>
);

export default PokemonList;
