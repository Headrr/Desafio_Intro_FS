import React from "react";
import s from "./style.module.css"

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperHeader}>
        Pokemon Details
      </div>
      <div className={s.wrapperSubtitle}>
        Select your favourite <bold style={{color: 'yellow'}}>&nbsp;Shiny</bold>
      </div>
    </div>
  );
};

export default Header;
