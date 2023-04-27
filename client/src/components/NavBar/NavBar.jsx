import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = ({ setPageValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.NavBar}>
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/pokemons"
      >
        PokeDex
      </NavLink>
      <SearchBar setPageValue={setPageValue} />
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/create"
      >
        Create
      </NavLink>
      {/* <button className={style.menuButton} onClick={toggleMenu}></button>
      {isOpen && (
        <nav className={style.hamburgerNav}>
          <ul className={`${style.menu} ${isOpen ? style.open : ""}`}>
            <li className={style.menuItem}>
              <a href="/create">Create</a>
            </li>
            <li className={style.menuItem}>
              <a href="/pokedex">Pokedex</a>
            </li>
          </ul>
        </nav>
      )} */}
    </div>
  );
};

export default NavBar;
