import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import WishListCard from "../../components/UI/WishListCard";
import Colors from "../../constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import CustomSearchBar from "../../components/UI/SearchBar";
import { SCREEN_WIDTH } from "../../constants/UiData";
import { Icon } from "@rneui/themed";

export default function WishListCategories(props) {
  const wishLists = [
    "Masaki Apartments",
    "Magomeni Rooms",
    "Best Rooms",
    "my liked list",
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={styles.topbar}>
        <MaterialCommunityIcons
          name="chevron-left"
          style={{ marginRight: 98 }}
          color={Colors.primary}
          size={20}
        />
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 20,
          }}
        >
          Wishlist
        </Text>
        <Pressable>
          <Text
            style={{
              color: Colors.primary,
              fontFamily: "inter-bold",
              fontSize: 16,
              marginLeft: 71,
            }}
            onPress={() => toggleDialog()}
          >
            clear
          </Text>
        </Pressable>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 26,
            textAlign: "center",
            marginTop: 26,
          }}
        >
          My List
        </Text>
        <View style={styles.searchbarContainer}>
          <CustomSearchBar placeholder="Search from your list" />
        </View>
      </View>

      {wishLists.map((wish) => {
        return (
          <View style={styles.wish} key={wish}>
            <Text
              style={{
                color: "#073762",
                fontFamily: "inter-bold",
                fontSize: 16,
              }}
            >
              {wish}
            </Text>
            <Icon
              raised
              name="chevron-right"
              type="material-community"
              //   color="#073762"
              size={15}
              containerStyle={{ width: 34 }}
              onPress={() => props.navigation.navigate("catwishlists")}
              style={{}}
            />
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  wish: {
    backgroundColor: "rgba(106, 177, 244, 0.13)",
    borderRadius: 12,
    padding: 10,
    height: 54,
    width: SCREEN_WIDTH - 0.2 * SCREEN_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },
  searchbarContainer: {
    // position: "relative",
    width: SCREEN_WIDTH - 0.2 * SCREEN_WIDTH,
    height: 55,
    borderRadius: 15,
    borderColor: "#9FC5E9",
    overflow: "hidden",
    borderWidth: 2,
    marginVertical: 7.5,
  },
});
