import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable } from "react-native";
import { Avatar } from "@rneui/themed";
import Colors from "../../constants/Colors";

const WelcomeScreen = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View>
        <View style={{ alignItems: "center" }}>
          <Avatar
            size={302}
            rounded
            source={require("../../assets/img/Group8.png")}
          />
        </View>
  
        <View style={{}}>
          <Text style={styles.titleStyle}>Welcome to DNM</Text>
          <Text style={styles.welcomeText}>
            Read our{" "}
            <Pressable onPress={() => props.navigation.navigate("privacy")}>
              <Text
                style={{
                  color: Colors.primary,

                  marginTop: 19,
                }}
              >
                {" "}
                Privacy Policy.
              </Text>
            </Pressable>{" "}
            Tap ”Agree & Continue” to accept the
            <Pressable>
              <Text
                style={{
                  color: Colors.primary,

                  marginTop: 19,
                }}
              >
                Terms of the Service.
              </Text>
            </Pressable>
          </Text>
        </View>
        <Pressable onPress={() => props.navigation.navigate("login")}>
          <Text style={styles.agreeText}>Agree & Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: "inter-bold",
    textAlign: "center",
    fontSize: 30,
  },
  welcomeText: {
    marginBottom: 15,
    fontFamily: "inter-regular",
    textAlign: "center",
    fontSize: 15,
  },
  agreeText: {
    marginTop: 35,
    color: Colors.primary,
    fontFamily: "inter-bold",
    textAlign: "center",
  },
});

export default WelcomeScreen;
