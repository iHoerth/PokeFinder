import { useState } from "react";
import { NavLink } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = ({ setSearchValue }) => {
  return (
    <div className={style.NavBar}>
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/pokemons"
      >
        POKEDEX
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/create"
      >
        CREATE
      </NavLink>
      <SearchBar setSearchValue={setSearchValue} />
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/login"
      >
        LOG IN
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/register"
      >
        REGISTER
      </NavLink>
      {/* <NavLink
            className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
            to="/pokemons"
          >
            LOG OUT
          </NavLink> */}
    </div>
  );
};

export default NavBar;
