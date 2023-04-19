import { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ setSearchValue }) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.NavBar}>
          <NavLink
            className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
            to="/pokemons"
          >
            POKEDEX
          </NavLink>
          <SearchBar setSearchValue={setSearchValue}/>
          <NavLink
            className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
            to="/login"
          >
            SIGN IN
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
            to="/signup"
          >
            SIGN UP
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
            to="/pokemons"
          >
            LOG OUT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
