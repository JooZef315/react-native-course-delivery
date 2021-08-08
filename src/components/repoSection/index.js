import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export var Section = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.seprator}></View>
      {children}
    </View>
  );
};
