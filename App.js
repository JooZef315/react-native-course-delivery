import React from "react";
import { StatusBar } from "react-native";

import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <HomeScreen />
    </>
  );
}
