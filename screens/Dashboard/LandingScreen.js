import React from 'react'
import {View, StyleSheet, Text, Pressable} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/UiData';
import CustomSearchBar from '../../components/UI/SearchBar';
import AppTopTaps from '../../navigation/AppTobTabsNav';
import {useSelector} from "react-redux";
import {loginAuth, setAuthentication} from "../../store/slices/appSlice";
import {Avatar} from "@rneui/themed";
import Colors from "../../constants/Colors";
import {SvgXml} from "react-native-svg";
import { Button } from '@rneui/base';

const topMenu = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM13 24C10.8244 24 8.69767 23.3549 6.88873 22.1462C5.07979 20.9375 3.66989 19.2195 2.83733 17.2095C2.00477 15.1995 1.78693 12.9878 2.21137 10.854C2.63581 8.72022 3.68345 6.7602 5.22183 5.22183C6.76021 3.68345 8.72022 2.6358 10.854 2.21136C12.9878 1.78692 15.1995 2.00476 17.2095 2.83733C19.2195 3.66989 20.9375 5.07979 22.1462 6.88873C23.3549 8.69767 24 10.8244 24 13C23.9967 15.9164 22.8367 18.7123 20.7745 20.7745C18.7123 22.8367 15.9164 23.9967 13 24ZM14.5 13C14.5 13.2967 14.412 13.5867 14.2472 13.8334C14.0824 14.08 13.8481 14.2723 13.574 14.3858C13.2999 14.4993 12.9983 14.5291 12.7074 14.4712C12.4164 14.4133 12.1491 14.2704 11.9393 14.0607C11.7296 13.8509 11.5867 13.5836 11.5288 13.2926C11.471 13.0017 11.5007 12.7001 11.6142 12.426C11.7277 12.1519 11.92 11.9176 12.1667 11.7528C12.4133 11.588 12.7033 11.5 13 11.5C13.3978 11.5 13.7794 11.658 14.0607 11.9393C14.342 12.2206 14.5 12.6022 14.5 13ZM14.5 7.5C14.5 7.79667 14.412 8.08668 14.2472 8.33335C14.0824 8.58003 13.8481 8.77229 13.574 8.88582C13.2999 8.99935 12.9983 9.02906 12.7074 8.97118C12.4164 8.9133 12.1491 8.77044 11.9393 8.56066C11.7296 8.35088 11.5867 8.08361 11.5288 7.79264C11.471 7.50166 11.5007 7.20006 11.6142 6.92597C11.7277 6.65189 11.92 6.41762 12.1667 6.2528C12.4133 6.08797 12.7033 6 13 6C13.3978 6 13.7794 6.15804 14.0607 6.43934C14.342 6.72064 14.5 7.10218 14.5 7.5ZM14.5 18.5C14.5 18.7967 14.412 19.0867 14.2472 19.3334C14.0824 19.58 13.8481 19.7723 13.574 19.8858C13.2999 19.9993 12.9983 20.0291 12.7074 19.9712C12.4164 19.9133 12.1491 19.7704 11.9393 19.5607C11.7296 19.3509 11.5867 19.0836 11.5288 18.7926C11.471 18.5017 11.5007 18.2001 11.6142 17.926C11.7277 17.6519 11.92 17.4176 12.1667 17.2528C12.4133 17.088 12.7033 17 13 17C13.3978 17 13.7794 17.158 14.0607 17.4393C14.342 17.7206 14.5 18.1022 14.5 18.5Z" fill="#073762"/>
</svg>`


const LandingScreen = (props) => {
    const isScreenLoading = useSelector((state) => state.AppStateReducer.isScreenLoading);
    const currentUser = useSelector((state) => state.AppStateReducer.loggedInUser);
    const isAuthenticated = useSelector((state) => state.AppStateReducer.token);
    console.log(isAuthenticated)
  return (
    <View style={styles.screen}>
      <View style={styles.screenHerosec}>
          <View style={styles.topNav}>
          <Pressable>
              <SvgXml xml={topMenu} width="22px" height="23px" />
          </Pressable>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               {isAuthenticated? (
                 <Avatar
                 size={32}
                 rounded
                 source={{}}
                 containerStyle={{borderColor:"#073762", borderWidth:2, marginLeft:-90}}
             />
               ):(
                <Button size="sm" containerStyle={{backgroundColorColor:"#073762", borderRadius:12, marginLeft:-90}}
                onPress={() => props.navigation.navigate("auth")}
                >Sign Up</Button>
               )}
              </View>
          </View>
          {/* <View style={styles.desctitle}> */}
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 18,
            marginTop: 2,
          }}
        >
         Karibu tena,

        </Text>
        <Text
          style={{
            color: "#073762",
            fontFamily: "inter-bold",
            fontSize: 18,
            marginTop: 2,
          }}
        >
         Professional Unyama
        </Text>
          <View style={styles.searchbarContainer}>
          <CustomSearchBar placeholder="Find your new place?"/>
          </View>
      </View>
      <View style={{flex:1}}>
        <AppTopTaps/>
      </View>

    </View>
  )
}

export default LandingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent:"center",
    // alignItems:'center',
    height: SCREEN_HEIGHT,
    backgroundColor: "white",
  },
  screenHerosec: {
    flexDirection: "column",
    height: "20%",
    width: SCREEN_WIDTH,
    paddingHorizontal: 25,
    marginTop: 50,
  },
  searchbarContainer: {
    position: "relative",
    width: "100%",
    height: 55,
    borderRadius:15 ,
    borderColor: "#9FC5E9",
    overflow: "hidden",
    borderWidth: 2,
    marginVertical: 4.5,

  },topNav:{
        width: SCREEN_WIDTH,
        // paddingHorizontal:30,
        paddingVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})
