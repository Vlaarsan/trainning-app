import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const Page6 = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [allCards, setAllCards] = useState([
    {
      id: 0,
      name: "chien",
      discovered: false,
    },
    {
      id: 1,
      name: "chat",
      discovered: false,
    },
    {
      id: 2,
      name: "chien",
      discovered: false,
    },
    {
      id: 3,
      name: "chat",
      discovered: false,
    },
  ]);

  const selectedCard = (id) => {
    if (selectedCards.length < 2) {
      setSelectedCards((prevcards) => [...prevcards, id]);
    }
  };

  const checkPairs = () => {
    if (selectedCards.length === 2) {
      const [id1, id2] = selectedCards;

      if (allCards[id1].name === allCards[id2].name) {
        console.log("Paire trouvée !");

        setAllCards((prevCards) => {
          const updatedCards = [...prevCards];
          updatedCards[id1].discovered = true;
          updatedCards[id2].discovered = true;
          return updatedCards;
        });
      } else {
        console.log("Paire non trouvée. Réessayez.");
      }

      setSelectedCards([]);
    }
  };


  useEffect(() => {
    console.log(selectedCards);
    checkPairs();
  }, [selectedCards]);

  return (
    <View>
      <Text style={styles.title}>Jeu de mémoire</Text>
      {allCards.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={[
            styles.cardContainer,
            { backgroundColor: card.discovered ? "#aaf" : "#fff" },
          ]}
          onPress={() => {
            selectedCard(card.id);
          }}
          disabled={card.discovered}
        >
          <Text>{`ID: ${card.id}`}</Text>
          <Text>{`Nom: ${card.name}`}</Text>
          <Text>{`Découvert: ${card.discovered ? "Oui" : "Non"}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Page6;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    marginVertical: 8,
    fontWeight: "bold",
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});
