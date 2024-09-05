import React from "react";
import { View,Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateAccountScreen } from "../../components/create_account/create-account.screen";
import { LicenseInformationScreen } from "../../components/create_account/license-information.screen";
import { VehicleInformationScreen } from "../../components/create_account/vehicle-information.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export const CreateAccountNavigator = () => {

    const AccountStack = createNativeStackNavigator();

    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="Create Account" component={CreateAccountScreen} />
            <AccountStack.Screen name="License Number" component={LicenseInformationScreen} />
            <AccountStack.Screen name="Vehicle Information" component={VehicleInformationScreen} />
        </AccountStack.Navigator>
    )
}