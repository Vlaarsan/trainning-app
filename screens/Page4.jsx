import { ImageBackground, ScrollView, StyleSheet, Text, View, } from "react-native";
import React from "react";
import { ImageOfGalery } from "../components/ImageOfGalery";
import { useFonts, Pacifico_400Regular,} from '@expo-google-fonts/pacifico';


const Page4 = () => {

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ScrollView style={styles.container}>
      <ImageBackground src="https://wallpapers.com/images/featured/portrait-photography-background-8havpbr5k0u2fbb9.jpg"
      resizeMode="cover">
      <Text style={styles.title}>Galerie d'images</Text>
      <View style={styles.imagesContainer}>
      <ImageOfGalery url="https://images.alphacoders.com/605/605592.png" />
      <ImageOfGalery url="https://images2.alphacoders.com/564/564835.jpg" />
      <ImageOfGalery url="https://images8.alphacoders.com/533/533007.png" />
      <ImageOfGalery url="https://images.alphacoders.com/736/736461.png" />
      <ImageOfGalery url="https://images4.alphacoders.com/641/641968.jpg" />
      <ImageOfGalery url="https://images4.alphacoders.com/665/665374.jpg" />
      <ImageOfGalery url="https://images.alphacoders.com/465/465254.jpg" />
      <ImageOfGalery url="https://images3.alphacoders.com/133/1330505.png" />
      <ImageOfGalery url="https://images3.alphacoders.com/144/144565.jpg" />
      <ImageOfGalery url="https://images.alphacoders.com/846/84631.jpg" />
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Page4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90EE90",
  },
  title: {
    fontSize: 28,
    marginTop: 30,
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "Pacifico_400Regular",
  },
  imagesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});
