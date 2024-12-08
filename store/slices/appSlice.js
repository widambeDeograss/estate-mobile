import { createSlice } from "@reduxjs/toolkit";
import { appState } from "../utils/appStates";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = appState;

const getInitialAuth = async () => {
    if (await AsyncStorage.getItem("authToken")) {
        initialState.loggedInUser = JSON.parse(AsyncStorage.getItem("loggedInUser"));
        initialState.token = AsyncStorage.getItem("authToken");
      return true; 
    } else {
      return false;
    }
  };

  const initialAuth = getInitialAuth();

  initialState.isUserAuthenticated = initialAuth;

export const AppStateSlice = createSlice({
    name:'AppState',
    initialState:initialState,
    reducers:{
        toggleScreenLoading:(state) => {
            state.isScreenLoading = !state.isScreenLoading;
        },
        toggleThemeMode:(state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setAuthentication:(state, action) => {
          state.isUserAuthenticated = !state.isUserAuthenticated;
        },
        loginAuth: async (state, action) => {
          console.log(action.payload);
            const { user, token } = action.payload;
            state.loggedInUser = user
            state.token = token
         },
         logOut: async (state, action) => {
            await AsyncStorage.clear();  
            state.loggedInUser = null
            state.token = null
         }

    }
});

export const {toggleScreenLoading, toggleThemeMode, setAuthentication, loginAuth, logOut } = AppStateSlice.actions;
export default AppStateSlice.reducer;
