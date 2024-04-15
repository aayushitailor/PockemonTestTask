import React from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import PokemonCard from "./PokemonCard";
import styles from "./styles";

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return pokemons.length > 0 ? (
    <FlatList
      data={pokemons}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" style={styles.spinner} />
      }
    />
  ) : (
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default PokemonList;