import React from 'react';
import {SafeAreaView, Text, Pressable} from 'react-native';

const Houses = (props) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Pressable onPress={() => props.navigation.navigate("placedetails")}><Text>Houses</Text></Pressable> 
    </SafeAreaView>
  );
};

export default Houses;