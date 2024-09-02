import React from "react";
import { useContext } from "react";

import {Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen  from "../../features/home/screens/home.screen";
import { UserProfileContext } from "../../services/user/user.context";

export const HomeNavigator = () => {

    const HomeStack = createStackNavigator();

    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name = "Home Page" component={HomeScreen} /> 
        </HomeStack.Navigator>
           
    )
}