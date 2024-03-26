import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react'; // Ajout de useState
import axios from 'axios';

const Page7 = () => {
  const [titleInfo, setTitleInfo] = useState({}); // Déclaration de titleInfo avec useState

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/tt0000082',
        headers: {
          'X-RapidAPI-Key': '8500e18476mshed16ab41c97924dp1c72d7jsn223fb812d482',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setTitleInfo({
          id: response.data.results.id,
          title: response.data.results.titleText.text,
          url: response.data.results.primaryImage.url,
        }); 
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>ID: {titleInfo.id}</Text>
      <Text>Title: {titleInfo.title}</Text>
      <Image
        style={styles.image}
        source={{ uri: titleInfo.url }} // Utilisation de uri pour spécifier l'URL de l'image
      />
    </View>
  );
};

export default Page7;

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500,
  },
});
