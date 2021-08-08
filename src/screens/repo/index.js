import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";
import { Header, Section, RepoInfo } from "../../components";
import styles from "./styles";

import { str } from "../../utilities";

var Repo = ({ route }) => {
  const { data } = route.params;
  //console.warn(data);
  return (
    <ScrollView>
      <StatusBar barStyle={"default"} />
      <Header
        homeScreen={false}
        txt={str(data.full_name, 24)}
        imgSource={data.owner.avatar_url}
      />
      <Section title={"Description"}>
        <Text style={styles.desc} numberOfLines={5}>
          {str(data.description, 160)}
        </Text>
      </Section>
      <Section title={"Additional Information"}>
        <View style={styles.row}>
          <RepoInfo
            txt={"Stars"}
            num={data.stargazers_count}
            iname={"star"}
            color={"#f8b703"}
          />
          <RepoInfo
            txt={"Issues"}
            num={data.open_issues}
            iname={"alert"}
            color={"#dd1212"}
          />
        </View>
        <View style={styles.row}>
          <RepoInfo
            txt={"Forks"}
            num={data.forks_count}
            iname={"git-network"}
            color={"#007500"}
          />
          <RepoInfo
            txt={"Watchers"}
            num={data.watchers_count}
            iname={"md-eye"}
            color={"#052959"}
          />
        </View>
      </Section>
      <Section title={"Repo link"}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Linking.openURL(data.html_url)}
        >
          <Text style={styles.btnTxt}>{"Click here to open Repo link"}</Text>
        </TouchableOpacity>
      </Section>
    </ScrollView>
  );
};

export default Repo;
