import { StyleSheet, View, Image, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";

const ImageOfGalery = (props) => {
  const { url, sized } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const sizeUp = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={sizeUp}>
        <Image
          source={{ uri: url }}
          style={sized ? styles.sizedImage : styles.image}
        />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
          <Image source={{ uri: url }} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 20,
  },
  sizedImage: {
    width: "100%",
    height: "100%",
    margin: 30,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImage: {
    width: "95%",
    aspectRatio: 0.9,
    borderRadius: 20,
  },
});

export { ImageOfGalery, styles };
