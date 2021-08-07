import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  img: {
    height: 80,
    width: 80,
    marginEnd: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  repoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  repoTitle: {
    fontSize: 24,
    lineHeight: 32,
  },
  repoInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 6,
    padding: 4,
  },
});
