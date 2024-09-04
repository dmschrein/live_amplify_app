import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import {Text } from "react-native";

import { RecordedVideos } from "../../features/recorded/screen/recorded.screen";

export const ReportNavigator = () => {
    
    const ReportStack = createStackNavigator();

    return(
        <ReportStack.Navigator>
            <ReportStack.Screen name="recorded videos" component={RecordedVideos} options={{headerShown:false}}/>
        </ReportStack.Navigator>
    )
}