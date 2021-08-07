import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 120,
  },
  img: {
    height: 100,
    width: 100,
    marginVertical: 12,
    marginEnd: 12,
    borderRadius: 12,
  },
  txt: {
    color: "white",
    fontSize: 28,
  },
  homeContainer: {
    backgroundColor: "#000",
  },
  picker: {
    alignSelf: "center",
    marginBottom: 8,
    paddingBottom: 8,
    borderRadius: 12,
  },
});
