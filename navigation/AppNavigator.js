import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";
import LandingScreen from "../screens/Dashboard/LandingScreen";
import WishListScreen from "../screens/Dashboard/WishListScreen";
import ProfileScreen from "../screens/Dashboard/ProfileScreen";
import AppTopTaps from "./AppTobTabsNav";
import WishListCategories from "../screens/Dashboard/WishListCategories";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

 function WishListStack() {
  return (
    <Stack.Navigator
      initialRouteName="WishListCat"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerShown:false
      }}
    
    >
      <Stack.Screen
        name="WishListCat"
        component={WishListCategories}
        
      />
      <Stack.Screen
        name="catwishlists"
        component={WishListScreen}
        options={{
          title: 'My profile',
        }}
      />
    </Stack.Navigator>
  );
}

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="explore"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          position: "absolute",
          // bottom: 10,
          height: 82,
          paddingBottom: 20,
          width: "100%",
          // marginLeft: 20,
          shadowColor: "white",
          backgroundColor: "white",
        },
        headerShown: false,
      }}
      sceneContainerStyle={{
        marginBottom: 82,
      }}
    >
      <Tab.Screen
        name="explore"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={32} />
          ),
          tabBarLabel: "Explore",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "inter-bold",
          },
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListStack}
        options={{
          tabBarLabel: "WishList",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={32}
            />
          ),

          tabBarBadge: 3,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "inter-bold",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="store-outline"
              color={color}
              size={32}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "inter-bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
