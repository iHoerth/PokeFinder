import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import style from './Footer.module.css';

const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <NavLink to="/pokemons" className={style.navInactive}>
        PokeDex
      </NavLink>
      <NavLink to="/create" className={style.navInactive}>
        Create
      </NavLink>
      <NavLink href="https://www.linkedin.com/in/ignaciohoerth/" className={style.navInactive}>
        Contact me!
      </NavLink>
    </div>
  );
};

export default NavBar;
