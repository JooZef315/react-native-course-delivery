import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";

export var RepoInfo = ({ num, txt, color, iname }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iname} size={36} color={color} />
      <Text style={styles.title}>{txt}</Text>
      <Text style={[styles.iconTxt, { color: color }]}>{num}</Text>
    </View>
  );
};
