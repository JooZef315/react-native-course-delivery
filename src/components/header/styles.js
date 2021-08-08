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
  containerRepo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    padding: 16,
    height: 120,
    borderColor: "#e7e7e7",
    borderBottomWidth: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  txtRepo: {
    color: "black",
    fontSize: 21,
  },
  imgRepo: {
    height: 70,
    width: 70,
    margin: 14,
    marginVertical: 18,
    borderRadius: 12,
  },
});
