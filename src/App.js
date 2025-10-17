import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tableta from "./componentes/TableNew";
import PokemonDetail from "./componentes/PokemonDetail";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Tableta />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
