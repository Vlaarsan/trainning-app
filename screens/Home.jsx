import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>ENTRAINEMENT</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Page 1")}
        >
          <Text>Page 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Page 2")}
        >
          <Text>Page 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Page 3")}
        >
          <Text>Page 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Page 4")}
        >
          <Text>Page 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Page 5")}
        >
          <Text>Page 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 35,
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
});

export default Home;
