import React from "react";
import { Text, Pressable, Image, View } from "react-native";
import { CardInfo } from "../index";

import styles from "./styles";

export var RepoCard = (props) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.repoContainer}>
        <Image style={styles.img} source={{ uri: props.img }} />
        <View>
          <Text style={styles.repoTitle}>{props.title}</Text>
          <Text numberOfLines={1}>{props.desc}</Text>
        </View>
      </View>
      <View style={styles.repoInfoContainer}>
        <CardInfo txt={props.stars} name={"star"} size={12} color={"#f8b703"} />
        <CardInfo
          txt={props.issues}
          name={"alert"}
          size={16}
          color={"#dd1212"}
        />
        <CardInfo
          txt={props.owner}
          name={"logo-github"}
          size={16}
          color={"#000"}
        />
      </View>
    </Pressable>
  );
};
