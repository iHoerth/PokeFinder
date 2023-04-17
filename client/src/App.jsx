import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import "./styles/type-icons.css";

function App() {
  const [search, setSearch] = useState("");

  const setSearchValue = (param) => {
    setSearch(param);
  };

  useEffect(() => {
    document.title = "POKEAPP";
  }, []);

  return (
      <BrowserRouter>
        <div className="App">
          <NavBar setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/pokemons/" element={<Home search={search} />} />
            <Route path="/pokemons/:type" element={<Home search={search} />} />
            <Route path="*" element={<Home search={search} />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
