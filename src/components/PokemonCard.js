import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const navigation = useNavigation();
  const bgStyles = { backgroundColor: "#fff", ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", {
      id: pokemon.id,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default PokemonCard;
