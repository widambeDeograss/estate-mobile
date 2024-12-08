import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  StatusBar, Alert,
} from "react-native";
import {Avatar, Dialog} from "@rneui/themed";
import {
  PhoneInput,
  getCountryByCca2,
} from "react-native-international-phone-number";
import Colors from "../../constants/Colors";
import { useFormRequests } from "../../hooks/FormsPostData";
import {AuthUrl} from "../../utils/apiUrls";
import {useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = (props) => {
  const formPost = useFormRequests();
  const isScreenLoading = useSelector((state) => state.AppStateReducer.isScreenLoading);
  const [selectedCountry, setSelectedCountry] = useState(
    getCountryByCca2("TZ")
  );
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }
  const handleRequestOtp = async () => {
    const number = selectedCountry.callingCode + inputValue
    console.log(number.replace(/\s+/g, "").replace("+", ""));
    Alert.alert(
      'Number Confirmation',
      `Is ${number.replace(/\s+/g, "").replace("+", "")} your phone number?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: async () => {
            try {
              const body = {
                cellphone: number.replace(/\s+/g, "").replace("+", ""),
              };
              console.log('Request Body:', body);
              const response = await formPost.post({
                url: AuthUrl.userRequestOtp,
                data: body,
              });

              await AsyncStorage.setItem("code", JSON.stringify(response));
              console.log('Response:', response);

              props.navigation.navigate('verificationCode', { response });
            } catch (error) {
              console.error('Error:', error);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );



  }
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
    >
      <View style={styles.top}>
        <Text
          style={{ color: "#073762", fontFamily: "inter-bold", fontSize: 16 }}
        >
          Enter Your Phone Number
        </Text>
        <Pressable
        onPress={() => {
          handleRequestOtp();

        }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontFamily: "inter-bold",
              fontSize: 16,
              marginLeft: 70,
            }}
          >
            Done
          </Text>
        </Pressable>
      </View>
      <View>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-semibold",
            fontSize: 13,
            marginTop: 20,
          }}
        >
          DNM will send as SMS message to verify your
        </Text>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-semibold",
            fontSize: 13,
          }}
        >
          phone number (carrier charges may apply)
        </Text>
      </View>
      <View style={{ width: "100%", flex: 1, padding: 24 }}>
        <PhoneInput
          value={inputValue}
          onChangePhoneNumber={handleInputValue}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
          containerStyle={{ borderColor: Colors.primary }}
          inputStyle={{
            fontSize: 10,
            fontFamily: "inter-semibold",
            color: "#073762",
          }}
        />
      </View>
      <Dialog
          isVisible={isScreenLoading}
      >
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 10, textAlign: "center" }}>Requesting otp..</Text>
        <Dialog.Loading
        />
      </Dialog>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
});
export default Login;
