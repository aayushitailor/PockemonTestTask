import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statsBlock: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});

export default styles;