import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button, Avatar } from "@rneui/themed";
import { SCREEN_WIDTH } from "../../constants/UiData";
import Colors from "../../constants/Colors";

const AuthModal = ({ modalVisible, modalVisibility, navigation }) => {
  console.log(navigation);
  const [isLoggedIn, setisLoggedIn] = useState(true);
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          modalVisibility();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigation.navigate("auth");
                modalVisibility();
              }}
            >
              <Text style={styles.textStyle}>Login</Text>
            </Pressable>
            <Pressable style={[styles.loggedbtn]} onPress={modalVisibility}>
              <Avatar
                size={32}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
              <Text style={styles.loggedtxtStyle}>Proffecional Unyama</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.modalText}>Another Account</Text>
            </Pressable>

            <Pressable style={styles.cancelbtn} onPress={modalVisibility}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "inter-bold",
                  textAlign: "center",
                }}
              >
                cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    marginBottom: 80,
    width: SCREEN_WIDTH,
    height: 305,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    width: 234,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 16,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  cancelbtn: {
    borderRadius: 20,
    width: 104,
    padding: 10,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  loggedbtn: {
    borderRadius: 20,
    width: 304,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: Colors.primary,
    fontFamily: "inter-bold",
    textAlign: "center",
  },
  loggedtxtStyle: {
    color: Colors.secondary,
    fontFamily: "inter-bold",
    textAlign: "center",
    marginTop: 5,
  },
  modalText: {
    marginBottom: 15,
    color: Colors.primary,
    fontFamily: "inter-bold",
    textAlign: "center",
  },
});

export default AuthModal;
