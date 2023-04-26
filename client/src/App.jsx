import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

import { getTypes, getPokemons } from "./redux/actions";

import "./App.css";
import "./styles/type-icons.css";


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    document.title = "POKEAPP";
    dispatch(getTypes())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPokemons())
  },[dispatch])  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokemons/" element={<Home />} />
          <Route path="/pokemons/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
