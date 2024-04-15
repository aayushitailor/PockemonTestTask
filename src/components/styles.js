import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    spacing: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    num: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11,
    },
    name: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 15,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    image: {
        width: 90,
        height: 90,
    },
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 50 : 20,
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 80,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 120 : 80,
    },
});

export default styles;