import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  StatusBar,
  TextInput,
} from "react-native";
import Colors from "../../constants/Colors";

function CodeInput({ code, setCode, maximumLength, setIsPinReady }) {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
    //   if (isInputBoxFocused && isValueFocused) {
        return(
            <View key={index} style={[styles.splitbox, { borderBottomColor: "#000000", borderTopColor:"white", borderLeftColor:"white", borderRightColor:"white"}]}>
            <Text  style={styles.SplitBoxText}>{digit}</Text>
          </View>
        )
    //   } else {
    //     <View key={index} style={styles.splitbox}>
    //         <Text  style={styles.SplitBoxText}>{digit}</Text>
    //       </View>
    //   }
   
  };

  return (
    <View style={styles.codeContainer}>
      <Pressable onPress={handleOnPress} style={{flexDirection:"row"}}>{boxArray.map(boxDigit)}</Pressable>
      <TextInput
        style={styles.txtInputHidden}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  codeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtInputHidden: {
    position: "absolute",
    opacity: 0,
  },
  splitOtpbox: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
 splitbox:{ 
   borderBottomWidth:2,
   padding:12,
   minWidth:50,
   marginLeft:3
 },
 SplitBoxText:{
    fontSize:20,
    textAlign:"center",
    fontFamily:"inter-bold"
 },

});

// export const TextInputHidden = styled.TextInput`
//   /* width: 300px;
//   border-color: #e5e5e5;
//   border-width: 1px;
//   border-radius: 5px;
//   padding: 15px;
//   margin-top: 50px;
//   color: white; */
//   position: absolute;
//   opacity: 0;
// `;

// export const ButtonContainer = styled.TouchableOpacity`
//   background-color: #000000;
//   padding: 20px;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   margin-top: 30px;
// `;

// export const ButtonText = styled.Text`
//   color: black;
//   font-size: 20px;
// `;

export default CodeInput;
