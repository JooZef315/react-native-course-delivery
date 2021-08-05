import React from "react";
import { StyleSheet, Text, SafeAreaView  } from "react-native";

import {HomeScreen} from "./src/screens";
import styles from "./src/shared/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <HomeScreen />
    </SafeAreaView>
  );
}
