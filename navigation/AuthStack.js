import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/AuthScreens/Welcome';
import Login from '../screens/AuthScreens/Login';
import PrivacyPolicy from '../screens/AuthScreens/PrivacyPolicy';
import CodeScreen from '../screens/AuthScreens/CodeSCreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerShown:false
      }}
    
    >
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="privacy"
        component={PrivacyPolicy}
        options={{
          gestureEnabled: false,
        }}
      />
        <Stack.Screen
        name="verificationCode"
        component={CodeScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}