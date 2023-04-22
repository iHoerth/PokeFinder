import React, { useState, useEffect } from "react";
import style from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className={style.wrapper}>
      <h1>PROYECTO INDIVIDUAL</h1>
      <div className={style.container}>
        {/* <div className={style.fieldText}>
          BIENVENIDOS AL MEJOR PI DE POKEMONES QUE VERAN EN SUS VIDAS! XD
        </div> */}
        <button onClick={() => handleNavigate(`/pokemons`)} className={style.button}>
          GOTTA FIND'EM ALL!
        </button>
      </div>
    </div>
  );
};

export default Landing;
