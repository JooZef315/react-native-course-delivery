import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../shared/styles";

export var Counter = () => {
  const [counter, setCounter] = useState(0);
  var handleAdd = () => {
    let c = counter + 1;
    setCounter(c);
  };
  var handleSub = () => {
    let c = counter - 1;
    setCounter(c);
  };
  return (
    <View style={styles.counter}>
      <Pressable style={styles.btn} onPress={handleAdd}>
        <Text style={styles.btntxt}>{"+"}</Text>
      </Pressable>
      <Text style={styles.txt}>{counter}</Text>
      <Pressable style={styles.btn} onPress={handleSub}>
        <Text style={styles.btntxt}>{"-"}</Text>
      </Pressable>
    </View>
  );
};
