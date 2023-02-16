import React, { useState } from "react";
import s from "./style.module.css";

const Receta = (props) => {
  const {
    id,
    name,
    img,
    imgShiny,
    types
  } = props;

  const [estado, setEstado] = useState(false);
  const selected = (state) => {
    setEstado(state);
  };

  const getBackgroundColor = () => {
    if (estado === true) {
      return "#e6e925";
    } else {
      return "white";
    }
  };
  const getBackgroundColor2 = () => {
    if (estado) {
      return "white";
    } else {
      return "#26baea";
    }
  };

  const typeColor = (type) => {
    if (type === 'Grass') {
      return "#9bcc50";
    }
    if (type === 'Poison') {
      return '#b97fc9'
    }
    if (type === 'Fire') {
      return '#fd7d24'
    }
    if (type === 'Flying') {
      return '#3dc7ef;'
    }
    if (type === 'Water') {
      return '#4592c4'
    }
    if (type === 'Ice') {
      return '#51c4e7'
    }
    if (type === 'Electric') {
      return '#eed535'
    }
    return true;
  }

  return (

    <div className={s.card}>
      <div className={s.containerCard}>
        <div>
          {estado === true ?
            <img
              alt="pokemon img"
              height="160"
              src={imgShiny}
            /> : 
            <img
              alt="pokemon img"
              height="160"
              src={img}
            />
          }
        </div>
        <div className={s.wrapperText}>
          {name}
          <span>#{id}</span>
        </div>
        <div className={s.wrapperChip}>
          {types.map((type, index) =>
            <div className={s.chip} style={{ backgroundColor: typeColor(type) }}>
              {type}
            </div>)}
        </div>
        <div className={s.wrapperButton}>
          <button
            className={s.buttonStyle}
            onClick={() => selected(false)}
            style={{ backgroundColor: getBackgroundColor2() }}
          >
            Normal
          </button>
          <button
            className={s.buttonStyle}
            onClick={() => selected(true)}
            style={{ backgroundColor: getBackgroundColor() }}
          >
            Shiny
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
