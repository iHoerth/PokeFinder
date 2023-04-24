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
      <img src='pi.png' alt='' style={{width:'50%',marginTop:'20px'}}/>
      <div className={style.container}>
        <button onClick={() => handleNavigate(`/pokemons`)} className={style.button}>
          GOTTA FIND'EM ALL!
        </button>
      </div>
    </div>
  );
};

export default Landing;
