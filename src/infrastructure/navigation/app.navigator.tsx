import React from "react";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./home.navigator";
import { RecordedNavigator } from "./recorded.navigator";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import HomeScreen from "../../features/home/screens/home.screen";
import { CameraScreen } from "../../features/camera/camera.screen";
import { ReportNavigator } from "./report.navigator";
import { ReportScreen } from "../../features/report/screen/report.screen";
import { SettingsNavigator } from "./settings.navigator";


export const AppNavigator = () => {
   const BottomTab = createBottomTabNavigator();
   

    return(
       
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeNavigator} />
            <BottomTab.Screen name="Recorded" component={RecordedNavigator} />
            <BottomTab.Screen name="Camera" component={CameraScreen} />
            <BottomTab.Screen name="Report" component={ReportNavigator} />
            <BottomTab.Screen name="Settings" component={SettingsNavigator} />
        </BottomTab.Navigator>
    )
}