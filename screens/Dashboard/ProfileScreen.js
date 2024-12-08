import React, { useState } from "react";
import { SafeAreaView, Text, View, Pressable, StyleSheet } from "react-native";
import { Input, Avatar, Dialog } from "@rneui/themed";
import Colors from "../../constants/Colors";
import SelectDropdown from "react-native-select-dropdown";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/UiData";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import {useSelector, useDispatch} from "react-redux";
import {loginAuth, setAuthentication} from "../../store/slices/appSlice";

const ProfileScreen = () => {
  const [profileDialog, setprofileDialog] = useState(false);
  const [isStudent, setisStudent] = useState(false);
  const [pickedImage, setpickedImage] = useState();
  const isScreenLoading = useSelector((state) => state.AppStateReducer.isScreenLoading);
  const currentUser = useSelector((state) => state.AppStateReducer.loggedInUser);
  const isAuthenticated = useSelector((state) => state.AppStateReducer.isUserAuthenticated);


  const getPermissionAsync = async () => {
    const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(status);

    if (status.status !== "granted") {
      Alert.alert(
          "Insufficient permissions!",
          "You need to grant camera permissions to use this app.",
          [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await getPermissionAsync();
    console.log(hasPermission);
    if (!hasPermission) {
      return;
    }
    // const image = await ImagePicker.launchImageLibraryAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9],
      quality: 1,
      });

    // Explore the result

    if (!result.canceled) {
      setpickedImage(result.assets[0].uri);
      props.onImageTaken(result.assets[0].uri);
    }
  };

  const toggleDialog = () => {
    setprofileDialog(!profileDialog);
  };
  const student = ["Yes", "No"];
  const University = [
    "UDSM",
    "DIT",
    "CBE, Dar es salaam",
    "Mwalimu Nyerere Un",
    "Tumaini",
  ];
  const gender = ["Male", "Female"];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 16,
          }}
        >
          Edit Profile
        </Text>
        <Pressable>
          <Text style={styles.donebtn} onPress={() => toggleDialog()}>
            Done
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}

      >
        <Pressable
        onPress={takeImageHandler}
        >
        <Avatar
          size={72}
          rounded
          source={{uri:pickedImage}}
          containerStyle={{borderColor:Colors.primary, borderWidth:2}}
        />
        </Pressable>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-semibold",
            fontSize: 12,
            marginTop: 19,
          }}
        >
          Enter your name and add an optional
        </Text>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-semibold",
            fontSize: 12,
          }}
        >
          profile picture
        </Text>
      </View>
      <View style={{ width: "80%", alignItems: "center" }}>
        <Input
          placeholder="Proffecional Unyama"
          inputStyle={styles.nameInput}
          inputContainerStyle={{ borderBottomWidth: 0, padding: 10 }}
        />
        <Input
          placeholder="Uyama123@DNM.co.tz"
          inputStyle={styles.nameInput}
          inputContainerStyle={{
            borderBottomWidth: 0,
            padding: 10,
            marginTop: -20,
          }}
        />
        <SelectDropdown
          data={student}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            if (index == 0) {
              setisStudent(true);
            } else {
              setisStudent(false);
            }
          }}
          defaultButtonText="Are you a student ?"
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          buttonStyle={styles.isStudentDropdown}
          buttonTextStyle={{
            fontFamily: "inter-bold",
            fontSize: 12,
            textAlign: "left",
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          renderDropdownIcon={() => {
            return (
              <MaterialCommunityIcons
                name="chevron-down"
                color={Colors.primary}
                size={30}
              />
            );
          }}
        />
        {isStudent && (
          <View style={styles.studentbox}>
            <SelectDropdown
              data={University}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="University Name"
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              buttonStyle={styles.isStudentDropdown}
              buttonTextStyle={{
                fontFamily: "inter-bold",
                fontSize: 12,
                textAlign: "left",
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => {
                return (
                  <MaterialCommunityIcons
                    name="chevron-down"
                    color={Colors.primary}
                    size={30}
                  />
                );
              }}
            />
            <Input
              placeholder="Registration Number"
              keyboardType="ascii-capable"
              inputStyle={styles.regNoinput}
              inputContainerStyle={{
                borderBottomWidth: 0,
                padding: 10,
              }}
            />
            <SelectDropdown
              data={gender}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Gender"
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              buttonStyle={styles.isStudentDropdown}
              buttonTextStyle={{
                fontFamily: "inter-bold",
                fontSize: 12,
                textAlign: "left",
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => {
                return (
                  <MaterialCommunityIcons
                    name="chevron-down"
                    color={Colors.primary}
                    size={30}
                  />
                );
              }}
            />
          </View>
        )}
      </View>
      <Dialog
        isVisible={profileDialog}
        onBackdropPress={toggleDialog}
        style={styles.dialog}
      >
        <Dialog.Title title="" />
        <Text>Dialog body text. Add relevant information here.</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="ACTION 1"
            onPress={() => console.log("Primary Action Clicked!")}
          />
          <Dialog.Button
            title="ACTION 2"
            onPress={() => console.log("Secondary Action Clicked!")}
          />
        </Dialog.Actions>
      </Dialog>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginLeft: 120,
  },
  donebtn: {
    color: Colors.primary,
    fontFamily: "inter-bold",
    fontSize: 16,
    marginLeft: 80,
  },
  dialog: {
    height: "100%",
    position: "absolute",
    bottom: 20,
    borderRadius: 50,
  },
  studentbox: {
    backgroundColor: "rgba(106, 177, 244, 0.21)",
    width: SCREEN_WIDTH - 0.2 * SCREEN_WIDTH,
    padding: 10,
    alignItems: "center",
    height: 250,
    justifyContent: "center",
    marginTop: 30,
  },
  nameInput: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    fontFamily: "inter-medium",
    fontSize: 12,
  },
  isStudentDropdown: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    fontSize: 9,
    marginTop: -10,
    width: "90%",
    backgroundColor: "white",
    height: 47,
  },
  regNoinput:{
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    fontFamily: "inter-medium",
    fontSize: 16,
    backgroundColor: "white",
    height: 47,
  },
});

export default ProfileScreen;
