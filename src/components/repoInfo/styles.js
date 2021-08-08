import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e7e7e7",
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  title: {
    fontSize: 20,
  },
  iconTxt: {
    fontSize: 16,
  },
});
