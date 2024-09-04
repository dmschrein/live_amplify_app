import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SettingScreen } from "../../features/settings/screen/settings.screen";


export const SettingsNavigator = () => {
    const SettingStack = createStackNavigator();

    return (

        <SettingStack.Navigator>
            <SettingStack.Screen name="settings page"  component={SettingScreen} options={{headerShown:false}}/>
        </SettingStack.Navigator>

    )
}