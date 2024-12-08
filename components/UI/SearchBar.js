import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const CustomSearchBar = (props) => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View style={styles.view}>
      <SearchBar
        placeholder={props.placeholder}
        onChangeText={updateSearch}
        value={search}
        inputStyle={{
          fontFamily: "inter-semibold",
          color: Colors.primary,
        }}
        inputContainerStyle={{
          backgroundColor: "white",
          marginTop: -7,
        }}
        containerStyle={{
          borderRadius: 10,
          backgroundColor: "white",
          borderColor: "transparent",
          height: 54,
        }}
        lightTheme
        round
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // view:{
  //     justifyContent:'center',
  //     alignItems:'center'
  // }
});

export default CustomSearchBar;
