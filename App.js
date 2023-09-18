import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MusicScreen from './Screens/MusicScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import FavScreen from './Screens/FavScreen.js';
import AddScreen from './Screens/AddScreen.js';
import SignInScreen from './Screens/SignInScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebaseConfig } from "./config.js";
import * as firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Music list" component={MusicScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Favorites" component={FavScreen} />
      <Tab.Screen name="Add musics" component={AddScreen} />
      <Tab.Screen name="Sign In" component={SignInScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Tab = createBottomTabNavigator();