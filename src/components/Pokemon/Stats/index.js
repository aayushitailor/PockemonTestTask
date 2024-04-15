import { View, Text } from "react-native";
import { map, capitalize } from "lodash";
import styles from "./styles";

const Stats = (props) => {

  const barStyles = (num) => {
    const color =
      num >= 70 ? "#31BB09" : num < 70 && num >= 30 ? "#D7CA25" : "#E01C1C";
    return { backgroundColor: color, width: `${num}%` };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(props.stats, (item, index) => (
        <View key={index} style={styles.statsBlock}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))} 
    </View>
  );
}

export default Stats;