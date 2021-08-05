import React from "react";
import { Text, View } from "react-native";

import { Counter } from "../../components";
import styles from "../../shared/styles";

var Home = () => {
  return (
    <View style={styles.home}>
      <Counter />
    </View>
  );
};

export default Home;
