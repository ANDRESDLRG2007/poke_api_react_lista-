import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tableta() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los pokemons");
        }
        const data = await response.json();
        setPokemons(data.results);
        setLoading(false);
      } catch (err) {
        seterror(err.message);
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  const handlePokemonClick = (pokemon) => {
    navigate(`/pokemon/${pokemon.name}`, {
      state: { name: pokemon.name, url: pokemon.url },
    });
  };

  if (loading) return <div>Cargando pokemon ...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de pokemones</h1>
      <br />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemons.map((pokemon, index) => (
          <li
            key={index}
            onClick={() => handlePokemonClick(pokemon)}
            style={{
              cursor: "pointer",
              padding: "10px",
              margin: "5px 0",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
              textTransform: "capitalize",
            }}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tableta;
