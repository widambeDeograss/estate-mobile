import React from "react";
import {
  SafeAreaView,
  Text,
 
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";
import { Image } from '@rneui/themed';

const WishListCard = (props) => {
    console.log(props.image);
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.placecard}>
        <View>
          <Image
            source={{ uri: props.image }}
            style={styles.image}
            // containerStyle={styles.image}
            // PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={{marginTop:5}}>
          <Text
            style={{
              fontFamily: "inter-bold",
              fontSize: 14,
            }}
          >
            {props.placeName}
          </Text>

          <Text
            style={{
              fontFamily: "inter-bold",
              fontSize: 12,
              color: "#AFAFAF",
              marginTop:5
            }}
          >
            <MaterialCommunityIcons
              name="map-marker-outline"
              color={Colors.primary}
              size={16}
            />
            {props.address}
          </Text>
          <View style={{ flexDirection: "row",marginTop:5 }}>
            <Text
              style={{
                fontFamily: "inter-bold",
                fontSize: 14,
                color: Colors.primary,
              }}
            >
              Tzs. {props.price} 
            </Text>
            <Text
              style={{
                fontFamily: "inter-bold",
                fontSize: 12,
                color: "#AFAFAF",
              }}
            >
              /= @month
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop:5 }}>
            <MaterialCommunityIcons
              name="bed-empty"
              color={Colors.primary}
              size={20}
            />
            <Text
              style={{
                fontFamily: "inter-bold",
                fontSize: 12,
                color: "#AFAFAF",
                marginLeft:3,
                marginTop:3
              }}
            >
              {props.rooms} Bedrooms
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  placecard: {
    width: 393,
    paddingLeft: 14,
    paddingRight: 53,
    height: 132,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor:"rgba(106, 177, 244, 0.13)",
    marginTop:19,
    borderRadius:15
    
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 93,
    height: 106,
    borderRadius: 8,
    marginRight:20
  },
});

export default WishListCard;
