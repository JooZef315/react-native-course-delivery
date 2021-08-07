import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";

export var CardInfo = (props) => {
  return (
    <View style={styles.container}>
      <Ionicons name={props.name} size={props.size} color={props.color} />
      <Text>{props.txt}</Text>
    </View>
  );
};
