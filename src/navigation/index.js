import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, RepoScreen } from "../screens";

const { Screen, Navigator } = createNativeStackNavigator();

var Root = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={"Home"}
        screenOptions={{
          header: () => null,
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <Screen name={"Home"} component={HomeScreen} />
        <Screen name={"Repo"} component={RepoScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;
