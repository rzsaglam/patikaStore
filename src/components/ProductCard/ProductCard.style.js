import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width / 2.1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get("window").height / 2.4,
    width: Dimensions.get("window").width / 4,
    resizeMode: "contain",
  },
  desc: {
    fontSize: 20,
  },
  price: {
    color: "gray",
    textAlign: "left",
  },
});
