import React, { useState, useEffect } from "react";

function Tableta() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

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
  if (loading) return <div>Cargando pokemon ...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>lista de pokemones</h1>
      <br />
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tableta;
