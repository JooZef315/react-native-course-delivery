import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  home: {
    width: "100%",
  },
  counter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txt: {
    fontSize: 48,
    color: "teal",
    padding: 18,
  },
  btn: {
    fontSize: 28,
    backgroundColor: "teal",
    color: "#fff",
    borderRadius: 50,
  },
  btntxt: {
    fontSize: 28,
    color: "#fff",
    padding: 18,
  },
});

export default styles;
