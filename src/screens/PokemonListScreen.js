import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import PokemonList from "../components/PokemonList";
import { useDispatch } from 'react-redux';
import { fetchPokemonsApi, fetchPokemonDetailsByUrlApi } from '../redux/api/dataSlice';

const PokemonListScreen = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  // call list of pockemon api and its detail api
  const loadPokemons = async () => {
    try {
      await dispatch(fetchPokemonsApi(nextUrl)).then(async(res) => {
        let data =  res.payload;
        setNextUrl(data.next);
        const pokemonsArray = [];
        for await (const pokemon of data.results) {
          await dispatch(fetchPokemonDetailsByUrlApi(pokemon.url)).then((res1) => {
            const pokemonDetail = res1.payload;
            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              image: pokemonDetail.sprites.other["official-artwork"].front_default,
            });
          });
        }
        setPokemons([...pokemons, ...pokemonsArray]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

export default PokemonListScreen;