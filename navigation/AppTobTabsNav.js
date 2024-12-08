import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LandingScreen from "../screens/Dashboard/LandingScreen";
import Colors from "../constants/Colors";
import SingleRooms from "../screens/PlaceTypes/SingleRooms";
import Appartments from "../screens/PlaceTypes/Appartments";
import Houses from "../screens/PlaceTypes/Houses";
import SelfContainedRooms from "../screens/PlaceTypes/SelfContainedRooms";

const Tab = createMaterialTopTabNavigator();

export default function AppTopTaps() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.primary,
        tabBarStyle: {
          shadowColor: "white",
        },
      }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Single Rooms"
        component={SingleRooms}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bed-empty" color={color} size={20} />
          ),
          tabBarLabel: "Single Rooms",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "inter-bold",
            textTransform: "capitalize",
          },
        }}
      />
      <Tab.Screen
        name="Appartments"
        component={Appartments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-city-outline"
              color={color}
              size={20}
            />
          ),
          tabBarLabel: "Appartment",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "inter-bold",
            textTransform: "capitalize",
          },
        }}
      />
      <Tab.Screen
        name="House"
        component={Houses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={20}
            />
          ),
          tabBarLabel: "House",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "inter-bold",
            textTransform: "capitalize",
          },
        }}
      />
      <Tab.Screen
        name="Self Contained"
        component={SelfContainedRooms}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="garage-variant"
              color={color}
              size={20}
            />
          ),
          tabBarLabel: "Self Contained",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "inter-bold",
            textTransform: "capitalize",
          },
        }}
      />
    </Tab.Navigator>
  );
}
