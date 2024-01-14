import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { increment } from "../fonctions/page1/Fonction1";
import { useCounter } from "../context/CounterContext";

const Page1 = () => {
    const { counter, setCounter } = useCounter();

  const incrementCounter = () => {
    setCounter(increment(counter));
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <Button title="Appuyer !" onPress={incrementCounter} />
      <Text style={styles.text}>
        Vous avez appuyé {counter} fois sur le bouton
      </Text>
      <Button title="Reset" onPress={resetCounter} />
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 30,
  },
});
