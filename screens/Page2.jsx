import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useCounter } from "../context/CounterContext";
import { useUserInfo } from "../context/UserInfoContext.js"

const Page2 = () => {
  const { counter } = useCounter();
  const { nickname, setNickname, age, setAge } = useUserInfo();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>La valeur du compteur est : {counter} </Text>
      <Text style={styles.text}>Le nickname est : {nickname} </Text>
      <Text style={styles.text}>L'age est : {age} </Text>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    margin:15,
  }
});
