import React from "react";
import { Text, Image, View, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import styles from "./styles";
import logo from "../../../assets/git.png";

export var Header = ({
  homeScreen,
  txt,
  imgSource,
  onChangeDate,
  show,
  setShowDate,
}) => {
  return (
    <>
      {homeScreen ? (
        <View style={styles.homeContainer}>
          <View style={styles.container}>
            <Image style={styles.img} source={logo} />
            <Text style={styles.txt}>{txt}</Text>
          </View>
          <View style={styles.picker}>
            <Button
              style={styles.btn}
              onPress={() => {
                show ? setShowDate(false) : setShowDate(true);
              }}
              title="Choose date to start from!"
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date(1611964800000)}
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
                textColor="white"
              />
            )}
          </View>
        </View>
      ) : (
        <View style={styles.containerRepo}>
          <Image style={styles.imgRepo} source={{ uri: imgSource }} />
          <Text style={styles.txtRepo}>{txt}</Text>
        </View>
      )}
    </>
  );
};
