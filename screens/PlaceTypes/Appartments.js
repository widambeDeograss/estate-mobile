import React, { useState } from "react";
import { SafeAreaView, Text, FlatList, View, StyleSheet } from "react-native";
import PlaceCard from "../../components/UI/PlaceCard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";
import AuthModal from "../../components/Auth/AuthModal";


const appartments = [
  {
    id: "1",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
    address: "Lufingila,Mwenge,DSM ",
    rooms: 2,
    bathrooms: 2,
    starts: 4.9,
    amount: 120000,
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=683&q=80",
    ],
    address: "Lufingila,Mwenge,DSM ",
    rooms: 2,
    bathrooms: 2,
    starts: 4.9,
    amount: 120000,
  },
];

const Appartments = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={appartments}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <PlaceCard
            images={itemData.item.images}
            onSelect={() => setModalVisible(!modalVisible)}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.address}>
                <Text style={styles.addressTitle}>{itemData.item.address}</Text>
                <View style={styles.star}>
                  <MaterialCommunityIcons
                    name="star"
                    color={Colors.primary}
                    size={21}
                  />
                  <Text style={styles.starno}>{itemData.item.starts}</Text>
                </View>
              </View>
              <View>
                <View style={styles.desc}>
                  <Text style={{ fontFamily: "inter-medium" }}>
                    {itemData.item.rooms}rooms
                  </Text>
                  <Text style={{ fontFamily: "inter-medium", marginLeft: 34 }}>
                    {itemData.item.bathrooms}bathrooms
                  </Text>
                </View>
                <Text style={{ fontSize: 20, fontFamily: "inter-extrabold" }}>
                  Tsh{itemData.item.amount}/=
                </Text>
              </View>
            </View>
          </PlaceCard>
        )}
      />
      <AuthModal
        modalVisible={modalVisible}
        modalVisibility={() => setModalVisible(!modalVisible)}
        navigation={props.navigation}
      />
    </View>
  );
};

export default Appartments;

const styles = StyleSheet.create({
  address: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addressTitle: {
    fontFamily: "inter-extrabold",
    fontSize: 16,
    color: Colors.primary,
  },
  star: {
    flexDirection: "row",
    marginLeft: 64,
    // justifyContent:'space-between'
  },
  starno: {
    fontFamily: "inter-extrabold",
    fontSize: 15,
    color: Colors.primary,
  },
  desc: {
    flexDirection: "row",
    alignItems: "center",
  },
});
