import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";
import CodeInput from "../../components/Auth/CodeInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormRequests } from "../../hooks/FormsPostData";
import {AuthUrl} from "../../utils/apiUrls";
import {Dialog} from "@rneui/themed";
import {useSelector, useDispatch} from "react-redux";
import {loginAuth, setAuthentication, toggleScreenLoading} from "../../store/slices/appSlice";



const CodeScreen = (props) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const isScreenLoading = useSelector((state) => state.AppStateReducer.isScreenLoading);
  const dispatch = useDispatch();
  const { response } = props.route.params;
  const code = AsyncStorage.getItem("code");
  const formPost = useFormRequests();

  console.log('====================================');
  console.log(isPinReady);
  console.log('====================================');
 const currentPhone = response;
  const maximumCodeLength = 6;
  useEffect(()=> {
    async function verifyOtp(){
      if (isPinReady) {
        try {
          const body = {
            cellphone: currentPhone?.cellphone,
            code:otpCode
          };
        
          const response = await formPost.post({
            url: AuthUrl.userVerifyOtp,
            data: body,
          });
          if (response?.status){
            const userdata = {user:response?.user, token:response?.token}
            await AsyncStorage.setItem('authToken', response?.token);
            await AsyncStorage.setItem('loggedInUser', JSON.stringify(response?.user))
              dispatch(loginAuth({ ...userdata }));
              dispatch(setAuthentication());
              dispatch(toggleScreenLoading(false));
              props.navigation.navigate('Profile');
          }else{
              alert("Otp code not correct")
          }
          console.log('Response:', response);

          // props.navigation.navigate('verificationCode');
        } catch (error) {
          alert("Otp code not correct")
          console.error('Error:', error);
        }
      }
    }

    verifyOtp()
   }, [isPinReady])


  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
    >
      <View style={styles.top}>
        <Pressable
          style={styles.editno}
          onPress={() => props.navigation.navigate("login")}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            style={{}}
            color={Colors.primary}
            size={20}
          />
          <Text
            style={{
              color: Colors.primary,
              fontFamily: "inter-bold",
              fontSize: 16,
            }}
          >
            Edit number
          </Text>
        </Pressable>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 16,
          }}
        >
          +{currentPhone?.cellphone}
        </Text>
      </View>
      <View style={styles.exp}>
        <Text
          style={{
            color: "#454545",
            fontFamily: "inter-regular",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          We have sebt you an SMS with a code to
        </Text>
        <Text
          style={{
            color: "#454545",
            fontFamily: "inter-regular",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          the number above
        </Text>
        <Text
          style={{
            color: "#454545",
            fontFamily: "inter-regular",
            textAlign: "center",
            fontSize: 16,
            marginTop: 4,
          }}
        >
          To complete your phone number activaion code.
        </Text>
        <Text
          style={{
            color: "#454545",
            fontFamily: "inter-regular",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          verification, please enter the 6-digit
        </Text>
        <Text
          style={{
            color: "#454545",
            fontFamily: "inter-regular",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          activaion code.
        </Text>
      </View>
      <View style={styles.codearea}>
        <View>
        <CodeInput
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
      />

        </View>
        <Text
          style={{
            color: "#AFAFAF",
            fontFamily: "inter-bold",
            fontSize: 16,
            textAlign:"center",
            marginTop:20
          }}
        >
          Resend Code in 1:59
        </Text>
      </View>
        <Dialog
            isVisible={isScreenLoading}
        >
            <Text style={{ fontFamily: "inter-regular", fontSize: 10, textAlign: "center" }}>Verifying otp..</Text>
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
    alignItems: "flex-start",
  },
  editno: {
    flexDirection: "row",
    marginLeft: -100,
    marginRight: 70,
  },
  exp: {
    width: 334,
    marginTop: 20,
  },
  codearea: {
    marginTop: 20,
  },
});

export default CodeScreen;
