import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";

const Page6 = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [allCards, setAllCards] = useState([
    {
      id: 0,
      name: "chien",
      discovered: false,
      flipped: false,
    },
    {
      id: 1,
      name: "chat",
      discovered: false,
      flipped: false,
    },
    {
      id: 2,
      name: "chien",
      discovered: false,
      flipped: false,
    },
    {
      id: 3,
      name: "chat",
      discovered: false,
      flipped: false,
    },
  ]);

  const selectedCard = (id) => {
    if (selectedCards.length < 2) {
      setSelectedCards((prevCards) => [...prevCards, id]);
      setAllCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[id].flipped = true;
        return updatedCards;
      });
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
        setTimeout(() => {
          setAllCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards[id1].flipped = false;
            updatedCards[id2].flipped = false;
            return updatedCards;
          });
        }, 800);
      }

      setSelectedCards([]);
    }
  };

  useEffect(() => {
    checkPairs();
  }, [selectedCards]);

  return (
    <View>
      <Text style={styles.title}>Jeu de mémoire</Text>
      {allCards.map((card) => (
        <TouchableOpacity
          key={card.id}
          onPress={() => {
            selectedCard(card.id);
          }}
          disabled={card.flipped}
        >
          <Image
            source={
              card.flipped
                ? card.name === "chien"
                  ? require("../assets/images/Chien.jpg")
                  : card.name === "chat"
                  ? require("../assets/images/Chat.jpg")
                  : require("../assets/images/PointInterrogation.jpg")
                : require("../assets/images/PointInterrogation.jpg")
            }
            style={styles.image}
          />
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
  image: {
    alignSelf: "center",
    width: 140,
    height: 140,
    margin: 15,
    borderRadius: 50,
    aspectRatio:0.8,
  },
});
