import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import UserProfile from './src/services/user.service';

import outputs from "./amplify_outputs.json";

Amplify.configure(outputs);

export default function App() {
 

  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView>
       <UserProfile />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
}


