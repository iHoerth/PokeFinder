import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Login from "./views/Login/Login";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import "./styles/type-icons.css";

function App() {

  useEffect(() => {
    document.title = "POKEAPP";
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokemons/" element={<Home />} />
          <Route path="/pokemons/detail/:id" element={<Detail />} />
          <Route path="/pokemons/?name=:name" element={<Home />} />
          <Route path="/create" element={<Create />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
