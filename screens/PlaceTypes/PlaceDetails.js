import React, {useState} from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Colors from "../../constants/Colors";
import { Icon, Divider, Button } from "@rneui/themed";
import { SvgXml } from "react-native-svg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { WishListModal } from "../../components/UI/WishListModal";

const images = [
  "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2968141/pexels-photo-2968141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6045221/pexels-photo-6045221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const cauchxml = `
<svg xmlns="http://www.w3.org/2000/svg" width="39" height="29" viewBox="0 0 39 29" fill="none">
<path d="M33.7952 8.95218V6.30435C33.7952 4.63233 33.1106 3.0288 31.8921 1.8465C30.6735 0.664206 29.0207 0 27.2974 0H11.7026C9.97927 0 8.32653 0.664206 7.10795 1.8465C5.88937 3.0288 5.20478 4.63233 5.20478 6.30435V8.95218C3.73589 9.24156 2.41529 10.0147 1.46673 11.1407C0.518178 12.2667 0 13.6762 0 15.1304C0 16.5847 0.518178 17.9942 1.46673 19.1202C2.41529 20.2461 3.73589 21.0193 5.20478 21.3087V26.4783C5.20478 27.1471 5.47861 27.7885 5.96604 28.2614C6.45348 28.7343 7.11458 29 7.80391 29H31.1961C31.8854 29 32.5465 28.7343 33.034 28.2614C33.5214 27.7885 33.7952 27.1471 33.7952 26.4783V21.3087C35.2641 21.0193 36.5847 20.2461 37.5333 19.1202C38.4818 17.9942 39 16.5847 39 15.1304C39 13.6762 38.4818 12.2667 37.5333 11.1407C36.5847 10.0147 35.2641 9.24156 33.7952 8.95218ZM11.7026 2.52174H27.2974C28.3314 2.52174 29.323 2.92026 30.0542 3.62964C30.7853 4.33902 31.1961 5.30114 31.1961 6.30435V8.95218C29.7294 9.24476 28.4115 10.019 27.4646 11.1445C26.5177 12.2699 25.9997 13.6776 25.9978 15.1304H13.0022C13.0003 13.6776 12.4823 12.2699 11.5354 11.1445C10.5885 10.019 9.27061 9.24476 7.80391 8.95218V6.30435C7.80391 5.30114 8.21466 4.33902 8.94581 3.62964C9.67696 2.92026 10.6686 2.52174 11.7026 2.52174ZM32.559 18.913H32.4957C32.151 18.913 31.8204 19.0459 31.5767 19.2823C31.333 19.5188 31.1961 19.8395 31.1961 20.1739V26.4783H7.80391V20.1739C7.80391 19.8395 7.66699 19.5188 7.42327 19.2823C7.17956 19.0459 6.84901 18.913 6.50434 18.913H6.44099C5.67272 18.9009 4.92527 18.6688 4.29252 18.2459C3.65977 17.823 3.16994 17.2281 2.88455 16.5359C2.59916 15.8437 2.53093 15.0852 2.68844 14.3555C2.84595 13.6259 3.22217 12.9576 3.76985 12.4348C4.31754 11.9119 5.01225 11.5577 5.76674 11.4166C6.52124 11.2756 7.30186 11.354 8.01057 11.642C8.71928 11.93 9.32448 12.4148 9.75013 13.0355C10.1758 13.6561 10.4029 14.3849 10.403 15.1304V21.4348C10.403 21.7692 10.54 22.0899 10.7837 22.3264C11.0274 22.5628 11.3579 22.6957 11.7026 22.6957C12.0473 22.6957 12.3778 22.5628 12.6215 22.3264C12.8653 22.0899 13.0022 21.7692 13.0022 21.4348V17.6522H25.9978V21.4348C25.9978 21.7692 26.1347 22.0899 26.3785 22.3264C26.6222 22.5628 26.9527 22.6957 27.2974 22.6957C27.6421 22.6957 27.9726 22.5628 28.2163 22.3264C28.46 22.0899 28.597 21.7692 28.597 21.4348V15.1304C28.5971 14.3849 28.8242 13.6561 29.2499 13.0355C29.6755 12.4148 30.2807 11.93 30.9894 11.642C31.6981 11.354 32.4788 11.2756 33.2333 11.4166C33.9877 11.5577 34.6825 11.9119 35.2301 12.4348C35.7778 12.9576 36.154 13.6259 36.3116 14.3555C36.4691 15.0852 36.4008 15.8437 36.1155 16.5359C35.8301 17.2281 35.3402 17.823 34.7075 18.2459C34.0747 18.6688 33.3273 18.9009 32.559 18.913Z" fill="#487FE1"/>
</svg>
`;

const washxml = `
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="35" viewBox="0 0 31 35" fill="none">
<path d="M14.2083 6.48148C14.2083 6.82528 14.0722 7.155 13.83 7.3981C13.5878 7.6412 13.2592 7.77778 12.9167 7.77778H10.3333C9.99076 7.77778 9.66222 7.6412 9.41999 7.3981C9.17775 7.155 9.04167 6.82528 9.04167 6.48148C9.04167 6.13768 9.17775 5.80796 9.41999 5.56486C9.66222 5.32176 9.99076 5.18518 10.3333 5.18518H12.9167C13.2592 5.18518 13.5878 5.32176 13.83 5.56486C14.0722 5.80796 14.2083 6.13768 14.2083 6.48148ZM22.6558 28.0551L23.2242 32.0412C23.2764 32.4089 23.2494 32.7836 23.1448 33.1398C23.0403 33.4961 22.8607 33.8257 22.6182 34.1063C22.3756 34.3868 22.0759 34.6118 21.7392 34.766C21.4025 34.9202 21.0368 35 20.6667 35H10.3333C9.96325 35 9.59748 34.9202 9.26079 34.766C8.9241 34.6118 8.62435 34.3868 8.38184 34.1063C8.13933 33.8257 7.95972 33.4961 7.85517 33.1398C7.75061 32.7836 7.72356 32.4089 7.77583 32.0412L8.34417 28.0551C5.8301 26.7401 3.72312 24.759 2.25206 22.3268C0.781004 19.8946 0.0021169 17.1044 0 14.2593C0 13.9155 0.136086 13.5857 0.378321 13.3426C0.620555 13.0995 0.949095 12.963 1.29167 12.963H3.875V2.59259C3.875 1.90499 4.14717 1.24556 4.63164 0.759353C5.11611 0.273147 5.77319 0 6.45833 0H24.5417C25.2268 0 25.8839 0.273147 26.3684 0.759353C26.8528 1.24556 27.125 1.90499 27.125 2.59259V12.963H29.7083C30.0509 12.963 30.3794 13.0995 30.6217 13.3426C30.8639 13.5857 31 13.9155 31 14.2593C30.9979 17.1044 30.219 19.8946 28.7479 22.3268C27.2769 24.759 25.1699 26.7401 22.6558 28.0551ZM6.45833 12.963H24.5417V2.59259H6.45833V12.963ZM20.1936 29.0856C17.1395 30.0578 13.8605 30.0578 10.8064 29.0856L10.3333 32.4074H20.6667L20.1936 29.0856ZM28.3521 15.5556H2.64792C2.96775 18.7533 4.45983 21.7179 6.83463 23.8739C9.20944 26.03 12.2976 27.2238 15.5 27.2238C18.7024 27.2238 21.7906 26.03 24.1654 23.8739C26.5402 21.7179 28.0322 18.7533 28.3521 15.5556Z" fill="#487FE1"/>
</svg>
`;

const bedsvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
<path d="M34.9375 12.0937H4.03125V8.0625C4.03125 7.70612 3.88968 7.36433 3.63767 7.11233C3.38567 6.86032 3.04388 6.71875 2.6875 6.71875C2.33112 6.71875 1.98933 6.86032 1.73733 7.11233C1.48532 7.36433 1.34375 7.70612 1.34375 8.0625V34.9375C1.34375 35.2939 1.48532 35.6357 1.73733 35.8877C1.98933 36.1397 2.33112 36.2812 2.6875 36.2812C3.04388 36.2812 3.38567 36.1397 3.63767 35.8877C3.88968 35.6357 4.03125 35.2939 4.03125 34.9375V29.5625H38.9687V34.9375C38.9687 35.2939 39.1103 35.6357 39.3623 35.8877C39.6143 36.1397 39.9561 36.2812 40.3125 36.2812C40.6689 36.2812 41.0107 36.1397 41.2627 35.8877C41.5147 35.6357 41.6562 35.2939 41.6562 34.9375V18.8125C41.6562 17.0306 40.9484 15.3216 39.6884 14.0616C38.4284 12.8016 36.7194 12.0937 34.9375 12.0937ZM4.03125 14.7812H16.125V26.875H4.03125V14.7812ZM18.8125 26.875V14.7812H34.9375C36.0067 14.7812 37.032 15.206 37.788 15.962C38.544 16.718 38.9687 17.7433 38.9687 18.8125V26.875H18.8125Z" fill="#487FE1"/>
</svg>
`;

const PlaceDetails = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <SliderBox
        images={images}
        sliderBoxHeight={300}
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        dotColor="#FFEE58"
        inactiveDotColor="#6AB1F4"
        dotStyle={styles.dotStyle}
      />
      <View style={styles.topbar}>
        <Icon
          raised
          name="chevron-left"
          type="material-community"
          color="#073762"
          size={20}
          containerStyle={{ width: 34, marginRight: "60%" }}
          onPress={() => console.log("hello")}
          style={{}}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Icon
            raised
            name="arrow-up-bold-box-outline"
            type="material-community"
            color="#073762"
            size={20}
            containerStyle={{ width: 30, marginRight: 20 }}
            onPress={() => console.log("hello")}
          />
          <Icon
            raised
            name="heart"
            type="material-community"
            color="#f50"
            size={20}
            onPress={() => setModalVisible(!modalVisible)}
            containerStyle={{ width: 30, height: 30 }}
          />
        </View>
      </View>

      <View style={styles.desctitle}>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 26,
            marginTop: 27,
          }}
        >
          Lufingila, Mwenge, DSM - 2 bedroom Apartment
        </Text>
        <View
          style={[styles.star, { alignItems: "flex-start", marginTop: 14 }]}
        >
          <View style={styles.star}>
            <MaterialCommunityIcons name="star" color="#073762" size={21} />
            <Text style={[styles.starno, { marginLeft: 6, marginTop: 2 }]}>
              4.9
            </Text>
          </View>

          <View style={[styles.star, { marginLeft: 15 }]}>
            <Text style={styles.starno}>32</Text>
            <Text style={[styles.starno, { marginLeft: 6 }]}>reviews</Text>
          </View>
        </View>
        <Text
          style={[
            styles.starno,
            { marginTop: 16, fontFamily: "inter-regular", marginBottom: 15,width:307 },
          ]}
        >
          Located near shawarma 27 , Lufungila, Mwenge,DSM
        </Text>

        <Divider style={{ borderWidth: 0.1,backgroundColor:"#AFAFAF" }} />
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 26,
            marginTop: 12,
            marginBottom:11
          }}
        >
          Details
        </Text>
        <View style={styles.features}>
          <View style={styles.feature}>
            <SvgXml xml={bedsvg} width="43px" height="43px" />
            <Text
              style={{
                color: "#073762",
                fontFamily: "inter-bold",
                fontSize: 14,
                marginTop: 27,
              }}
            >
              2 Bedrooms
            </Text>
          </View>
          <View style={styles.feature}>
            <SvgXml xml={washxml} width="43px" height="43px" />
            <Text
              style={{
                color: "#073762",
                fontFamily: "inter-bold",
                fontSize: 14,
                marginTop: 27,
                textAlignL: "left",
              }}
            >
              2 washrooms
            </Text>
          </View>
          <View style={styles.feature}>
            <SvgXml xml={cauchxml} width="43px" height="43px" />
            <Text
              style={{
                color: "#073762",
                fontFamily: "inter-bold",
                fontSize: 14,
                marginTop: 27,
                textAlignL: "left",
              }}
            >
              Not furnitured
            </Text>
          </View>
        </View>
        <View style={styles.features}>
           <View style={{width:195}}>
           <Text
          style={[styles.descrptionwd, {color: "#073762"}]}
        >
          120,000/= per month
        </Text>
        <Text
          style={{
            color: "#6C6C6C",
            fontFamily: "inter-regular",
            fontSize: 14,
            marginBottom:12
          }}
        >
          Paid in 3 month
        </Text>
           </View>
           <View style={{
            marginTop:27,
            borderRadius:10
           }}>
            <Button buttonStyle={{backgroundColor:"#487FE1", borderRadius:10, width:100}} titleStyle={{fontFamily:"inter-bold"}}>Reserve</Button>
           </View>
        </View>
      </View>

      <View style={styles.details}>
        <Divider style={{ borderWidth: 0.1,backgroundColor:"#AFAFAF" }} />
        <Text
          style={styles.descrptionwd}
        >
          Description
        </Text>
        <Text
          style={styles.descriptionprg}
        >
          Welcome to our charming apartments in Dar es Salaam, where comfort
          meets affordability! Each apartment is thoughtfully designed to cater
          to your needs, featuring modern amenities and a welcoming ambiance.
          With a monthly rent of 120,000 TZS, our apartments offer exceptional
          value for money. To simplify the payment process, we offer a
          convenient three-month payment plan, providing you with flexibility
          and peace of mind. However, for the initial lease, we kindly request
          payment for six months upfront. This ensures a smooth start to your
          stay and allows you to settle in without worrying about monthly
          payments right away. Experience the joy of living in a cozy and
          convenient apartment, surrounded by the vibrant atmosphere of Dar es
          Salaam. Your dream rental home awaits you!
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <Icon
            name="heart"
            type="material-community"
            color="#f50"
            size={30}
            onPress={() => console.log("hello")}
            containerStyle={{ width: 30, height: 30 }}
          />
          <Icon
            name="arrow-up-bold-box-outline"
            type="material-community"
            color="#073762"
            size={30}
            containerStyle={{ width: 30, marginRight: 20 }}
            onPress={() => console.log("hello")}
          />
        </View>
      </View>
      <WishListModal
        modalVisible={modalVisible}
        modalVisibility={() => setModalVisible(!modalVisible)}
        navigation={props.navigation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    position: "absolute",
    top: 30,
  },
  desctitle: {
    paddingHorizontal: 20,
    // alignItems:"center"
  },
  star: {
    flexDirection: "row",
    // marginLeft: 64,
    // justifyContent:'space-between'
  },
  starno: {
    fontFamily: "inter-extrabold",
    fontSize: 15,
    color: "#073762",
  },
  details: {
    paddingHorizontal: 15,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feature: {
    width: 106,
    height: 125,
    borderColor: "#487FE1",
    borderRadius: 12,
    flexDirection: "column",
    borderWidth: 1,
    padding: 10,
  },
  descriptionprg:{
    fontFamily: "inter-regular",
    fontSize: 12,
    marginTop: 11,
  },
  descrptionwd:{
    color: "#073762",
    fontFamily: "inter-bold",
    fontSize: 26,
    marginTop: 11,
  },
  dotStyle:{
    width: 9,
    height: 9,
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 0,
    margin: 0,
  }
});

export default PlaceDetails;
