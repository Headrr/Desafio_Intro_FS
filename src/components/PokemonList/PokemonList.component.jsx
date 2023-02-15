import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import PokemonItem from "../PokemonItem/PokemonItem.component";

const PokemonList = ({ data }) => (
  <Fragment>
    <div>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
        {data.map((item, idx) => {
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
        </Grid>
      </Grid>
    </div>
  </Fragment>
);

export default PokemonList;
