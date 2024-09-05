import React from "react";
import { useContext } from "react";

import {Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen  from "../../features/home/screens/home.screen";
import { UserProfileContext } from "../../services/user/user.context";
import { PrePackagedScreen } from "../../features/home/screens/pre-packaged.screen";
import { CreateComboScreen } from "../../features/home/screens/create-combo.screen";

export const HomeNavigator = () => {

    const HomeStack = createStackNavigator();

    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name = "Home Page" component={HomeScreen} options={{headerShown:false}}/> 
            <HomeStack.Screen name="Pre Packaged" component={PrePackagedScreen} /> 
            <HomeStack.Screen name="Create Combo" component={CreateComboScreen} />
        </HomeStack.Navigator>
           
    )
}