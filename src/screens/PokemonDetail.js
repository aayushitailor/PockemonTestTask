import { ActivityIndicator, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import { useDispatch } from 'react-redux';
import { fetchPokemonDetailsApi } from '../redux/api/dataSlice';

const Pokemon = (props) => {
  const dispatch = useDispatch();

  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: pokemon?.name
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetchPokemonDetailsApi(params.id)).then(async(res) => {
          setPokemon(res.payload);
        });
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return pokemon ? (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  ) : (
    <ActivityIndicator size="large" />
  );
}

export default Pokemon;