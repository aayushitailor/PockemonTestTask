import { View, Text, SafeAreaView, Image } from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../../utils/getColorByPokemonType";
import styles from "./styles";

const Header = (props) => {
  const { name, type, image } = props;
  const color = getColorByPokemonType(type);

  const bgStyles = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default Header;