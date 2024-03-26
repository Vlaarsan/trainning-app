import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const Page1 = () => {

  const [compteur, setcompteur] = useState(0)
  const [disableButtons, setdisableButtons] = useState(false)
  const [titleReset, settitleReset] = useState("Reset")

  const increment = () => {
    setcompteur(compteur + 1)
  }

  const decrement = () => {
    setcompteur(compteur - 1)
  }

  const reset = () => {
    setcompteur(0);
    setdisableButtons(!disableButtons)

    if (titleReset === "Reset") {
      settitleReset("Recommencer")
    } else {
      settitleReset("Reset")
    }
  }

  return (
    <View style={styles.container}>
      <Text>Mon compteur</Text>
      <Button title='+' onPress={increment} disabled={disableButtons} />
      <Button title='-' onPress={decrement} disabled={disableButtons}/>
      <Button title={titleReset} onPress={reset}/>
      <Text>{compteur}</Text>
    </View>
  )
}

export default Page1

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
})