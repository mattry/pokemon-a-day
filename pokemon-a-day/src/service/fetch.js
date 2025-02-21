// this script will build the data file we will use for json-server
// this way we can test everything locally without re-fetching from the actual api 

import axios from 'axios';
import { writeFile } from 'fs/promises';

async function fetchWithRetry(url, retries = 3, delay = 2000) {
    for (let i = 0; i < retries; i++) {
      try {
        return await axios.get(url, {
          timeout: 10000,
          maxRedirects: 5
        });
      } catch (error) {
        if (i === retries - 1) throw error;
        console.warn(`Retrying ${url} (${i + 1}/${retries})...`);
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }
  
  async function fetchPokemonData() {
    try {
      const response = await fetchWithRetry("https://pokeapi.co/api/v2/pokemon?limit=366");
      const pokemonList = response.data.results;
  
      const detailedPokemonData = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const details = await fetchWithRetry(pokemon.url);
          return details.data;
        })
      );
  
      await writeFile("db.json", JSON.stringify({ pokemon: detailedPokemonData }, null, 2));
      console.log("Pokemon data saved to db.json!");
    } catch (error) {
      console.error("Error fetching Pokémon data:", error.message);
    }
  }
  
  fetchPokemonData();