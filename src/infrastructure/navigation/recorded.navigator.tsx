import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import {Text } from "react-native";

import { RecordedVideos } from "../../features/recorded/screen/recorded.screen";

export const RecordedNavigator = () => {
    const RecordStack = createStackNavigator();

    return(
        <RecordStack.Navigator>
            <RecordStack.Screen name="recorded videos" component={RecordedVideos} options={{headerShown:false}}/>
        </RecordStack.Navigator>
    )
}