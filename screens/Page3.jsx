import { StyleSheet, Text, View, TextInput,Button, } from 'react-native'
import React from 'react'
import { useUserInfo } from "../context/UserInfoContext.js"

const Page3 = ({navigation}) => {

  const { nickname, setNickname, age, setAge } = useUserInfo();

  
  return (
    <View style={styles.container}>
      <Text>Nickname:</Text>
      <TextInput
        placeholder="Enter your nickname"
        value={nickname}
        onChangeText={(text) => setNickname(text)}
      />
      
      <Text>Age:</Text>
      <TextInput
        placeholder="Enter your age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <Button title="Save" onPress={() => navigation.navigate("Page 2")} />
    </View>
  );
};

export default Page3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    justifyContent: "center",
    padding: 20,
  },
})