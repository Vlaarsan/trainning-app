import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";

const Page5 = () => {
  const [iaChoice, setIaChoice] = useState("");
  const [myChoice, setMyChoice] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const play = () => {
    const choices = ["Pierre", "Feuille", "Ciseaux"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setIaChoice(randomChoice);
    setGameStarted(true);
    setMyChoice("");
  };

  const battle = () => {
    if (myChoice) {
      switch (true) {
        case myChoice === "Pierre" && iaChoice === "Pierre":
          Alert.alert("Match Nul", "Les deux joueurs ont choisi Pierre", [
            { text: "Rejouer", onPress: () => play() },
          ]);
          break;
        case myChoice === "Pierre" && iaChoice === "Ciseaux":
          Alert.alert(
            "Vous avez gagné",
            "Vous avez choisi Pierre, l'IA a choisi Ciseaux",
            [{ text: "Rejouer", onPress: () => play() }]
          );
          break;
        case myChoice === "Pierre" && iaChoice === "Feuille":
          Alert.alert(
            "Vous avez perdu",
            "Vous avez choisi Pierre, l'IA a choisi Feuille",
            [{ text: "Rejouer", onPress: () => play() }]
          );
          break;

        case myChoice === "Feuille" && iaChoice === "Pierre":
          Alert.alert(
            "Vous avez perdu",
            "Vous avez choisi Feuille, l'IA a choisi Pierre",
            [{ text: "Rejouer", onPress: () => play() }]
          );
          break;
        case myChoice === "Feuille" && iaChoice === "Ciseaux":
          Alert.alert(
            "Vous avez perdu",
            "Vous avez choisi Feuille, l'IA a choisi Ciseaux",
            [{ text: "Rejouer", onPress: () => play() }]
          );
          break;
        case myChoice === "Feuille" && iaChoice === "Feuille":
          Alert.alert("Match Nul", "Les deux joueurs ont choisi Feuille", [
            { text: "Rejouer", onPress: () => play() },
          ]);
          break;

        case myChoice === "Ciseaux" && iaChoice === "Pierre":
          Alert.alert(
            "Vous avez perdu",
            "Vous avez choisi Ciseaux, l'IA a choisi Pierre",
            [{ text: "Rejouer", onPress: () => play() }]
          );
          break;
        case myChoice === "Ciseaux" && iaChoice === "Ciseaux":
          Alert.alert("Match Nul", "Les deux joueurs ont choisi Ciseaux", [
            { text: "Rejouer", onPress: () => play() },
          ]);
          break;
        case myChoice === "Ciseaux" && iaChoice === "Feuille":
          Alert.alert(
            "Vous avez gagné",
            "Vous avez choisi Ciseaux, l'IA a choisi Feuille",
            [{ text: "Rejouer", onPress: () => play() }]
          );
          break;

        default:
          Alert.alert(
            "Résultat non reconnu",
            "Appuyez sur Rejouer pour continuer",
            [{ text: "Rejouer", onPress: () => play() }]
          );
      }
    }
  };

  useEffect(() => {
    battle();
  }, [myChoice]);

  return (
    <View>
      <Text style={styles.title}>Pierre  Feuille  Ciseaux</Text>
      <View style={{ marginVertical: 25 }}>
        <Button title="Jouer !" onPress={play} />
      </View>
      <View
        style={
          gameStarted
            ? styles.imageContainer
            : styles.imageContainerGameNotStarted
        }
      >
        <TouchableOpacity
          onPress={() => {
            setMyChoice("Pierre");
            setGameStarted(false)
          }}
        >
          <Image
            source={require("../assets/images/Pierre.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMyChoice("Feuille");
            setGameStarted(false)
          }}
        >
          <Image
            source={require("../assets/images/Feuille.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMyChoice("Ciseaux");
            setGameStarted(false)
          }}
        >
          <Image
            source={require("../assets/images/Ciseaux.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page5;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    marginVertical: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    flexWrap: "wrap",
  },
  imageContainerGameNotStarted: {
    display: "none",
  },
  image: {
    width: 200,
    height: 200,
  },
  textMonChoix: {
    textAlign: "center",
    marginTop: 25,
  },
});
