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

cardsdata = [
  {
    id: 1,
    placeName: "231 Avenue Apartments",
    image:
      "https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Mahando street,Masaki, DSM",
    price: "560,000",
    no_ofbeds: 2,
  },
  {
    id: 2,
    placeName: "Beach View Masaki",
    image:
      "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Masaki, DSM",
    price: "460,000",
    no_ofbeds: 1,
  },
];

const WishListScreen = (props) => {
  
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"  }}
    >
      <View style={styles.topbar}>
      <MaterialCommunityIcons
              name="chevron-left"
              style={{marginRight: 98,}}
              color={Colors.primary}
              size={20}
              onPress={() => props.navigation.navigate("WishListCat")}
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
      <View style={{ marginTop: 31, alignItems: "center" }}>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 24,
          }}
        >
          Masaki Apartments
        </Text>
      </View>
      <View style={{ flex: 1, marginTop:46 }}>
        <FlatList
          data={cardsdata}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <WishListCard
              image={itemData.item.image}
              placeName={itemData.item.placeName}
              address = {itemData.item.address}
              price = {itemData.item.price}
              rooms={itemData.item.no_ofbeds}
              onSelect={() => {}}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topbar: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 50,
  },
});

export default WishListScreen;
