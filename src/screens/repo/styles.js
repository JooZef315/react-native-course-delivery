import { StyleSheet } from "react-native";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  desc: {
    fontSize: 18,
    color: "#646669",
  },
  btn: {
    backgroundColor: "teal",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 18,
    marginTop: 8,
  },
  btnTxt: {
    color: "white",
    fontSize: 16,
  },
});
