import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input, Avatar, Dialog } from "@rneui/themed";
import { SCREEN_WIDTH } from "../../constants/UiData";
import Colors from "../../constants/Colors";

export const WishListModal = ({
  modalVisible,
  modalVisibility,
  navigation,
}) => {
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
          <Pressable>
            <Text style={styles.modalText}>Create wishlist</Text>
          </Pressable>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigation.navigate("auth");
                modalVisibility();
              }}
            >
              <Text style={styles.textStyle}>Login</Text>
            </Pressable> */}
            <View style={{ width: "100%" }}>
              <Input
                placeholder="Rooms"
                inputStyle={{
                  borderColor: "#AFAFAF",
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 9,
                  fontFamily: "inter-medium",
                  fontSize: 12,
                }}
                inputContainerStyle={{ borderBottomWidth: 0, padding: 10 }}
                // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                // onChangeText={value => this.setState({ comment: value })}
              />
               <Text style={[styles.textStyle, {fontSize:12, color:"#6C6C6C", textAlign:"left", marginLeft:30, marginTop:-20, fontFamily:"inter-thin"}]}>5/50 characters</Text>
            </View>
         <View style={{flexDirection:"row",
           justifyContent:'space-between',
           marginTop:27
        }}>
         <Pressable style={{}} onPress={modalVisibility}>
              <Text
                style={{
                  color: "#073762",
                  fontFamily: "inter-bold",
                  textDecorationLine:"underline",
                  marginRight:160,
                  marginTop:20
                }}
              >
                clear
              </Text>
            </Pressable>
         <Pressable style={styles.cancelbtn} >
              <Text
                style={{
                  color: "white",
                  fontFamily: "inter-bold",
                  textAlign: "center",
                }}
              >
                Create
              </Text>
            </Pressable>
         </View>
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
    // marginBottom: 80,
    width: SCREEN_WIDTH,
    height: 325,
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
    borderRadius: 12,
    width: 104,
    padding: 10,
    backgroundColor: "#487FE1",
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
    fontFamily: "inter-bold",
    textAlign: "center",
  },
});
