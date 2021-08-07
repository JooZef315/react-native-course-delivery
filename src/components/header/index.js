import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";
import logo from "../../../assets/git.png";

export var Header = ({ txt }) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={logo} />
        <Text style={styles.txt}>{txt}</Text>
      </View>
    </>
  );
};
