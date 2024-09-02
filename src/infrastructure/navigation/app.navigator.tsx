import React from "react";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./home.navigator";
import { RecordedNavigator } from "./recorded.navigator";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import HomeScreen from "../../features/home/screens/home.screen";


export const AppNavigator = () => {
   const BottomTab = createBottomTabNavigator();
   

    return(
       
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Recorded" component={RecordedNavigator} />
        </BottomTab.Navigator>
    )
}