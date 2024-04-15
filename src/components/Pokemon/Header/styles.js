import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bg: {
      width: "100%",
      height: 400,
      position: "absolute",
      borderBottomEndRadius: 100,
      borderBottomLeftRadius: 400,
      transform: [{ scaleX: 1.5 }],
    },
    content: {
      marginHorizontal: 20,
      marginTop: 60,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 10,
    },
    name: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 25,
    },
    order: {
      color: "#fff",
      fontWeight: "bold",
    },
    contentImg: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      top: 15,
    },
    image: {
      width: 250,
      height: 250,
      resizeMode: "contain",
    },
  });

export default styles;