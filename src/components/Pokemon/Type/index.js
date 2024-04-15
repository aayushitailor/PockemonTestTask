import { View, Text } from "react-native";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../../utils/getColorByPokemonType";
import styles from "./styles";

const Type = (props) => {
  const { types } = props;

  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

export default Type;