import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnBoardingScreen';
import AuthStack from './navigation/AuthStack';
import BottomNavigator from './navigation/AppNavigator';
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlaceDetails from './screens/PlaceTypes/PlaceDetails';
import store from './store/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({});
};

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  const [fontsLoaded] = useFonts({
    "inter-black": require("./assets/fonts/Inter/static/Inter-Black.ttf"),
    "inter-bold": require("./assets/fonts/Inter/static/Inter-Bold.ttf"),
    "inter-semibold": require("./assets/fonts/Inter/static/Inter-SemiBold.ttf"),
    "inter-extrabold": require("./assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
    "inter-extralight": require("./assets/fonts/Inter/static/Inter-ExtraLight.ttf"),
    "inter-Light": require("./assets/fonts/Inter/static/Inter-Light.ttf"),
    "inter-regular": require("./assets/fonts/Inter/static/Inter-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
    "inter-thin": require("./assets/fonts/Inter/static/Inter-Thin.ttf"),
  });

  
  const loadfsc = async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }

  React.useEffect( () => {
  loadfsc()
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer
       
      >
     <Provider store={store}>
     <Stack.Navigator screenOptions={{headerShown: false,
          
        }}
      
          >
            {isAppFirstLaunched && (
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
              />
            )}
            <Stack.Screen name="HomeScreen" component={BottomNavigator} />
            <Stack.Screen name="auth" component={AuthStack} />
            <Stack.Screen name="placedetails" component={PlaceDetails} />
          </Stack.Navigator>
     </Provider>
      </NavigationContainer>
    )
  );
};

export default App;