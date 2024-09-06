import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";


import outputs from "./amplify_outputs.json";
import Navigation from './src/infrastructure/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/infrastructure/navigation/app.navigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/features/home/screens/home.screen';
import { UserProfileContextProvider } from './src/services/user/user.context';

import { PaperProvider } from 'react-native-paper';

Amplify.configure(outputs);

export default function App() {
 const Tab = createBottomTabNavigator()

  return (
    <PaperProvider>
    <Authenticator.Provider>
      <Authenticator>
      <UserProfileContextProvider>
        
          <Navigation />
         
      </UserProfileContextProvider>
      </Authenticator>
    </Authenticator.Provider>
   </PaperProvider>
  );
}

//use <UserProfile /> for testing data - read, write etc...
// use <Navigation /> for original work flow...