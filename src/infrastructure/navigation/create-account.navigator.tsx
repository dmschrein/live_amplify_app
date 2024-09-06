import React from "react";
import { View,Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateAccountScreen } from "../../components/create_account/create-account.screen";
import { LicenseInformationScreen } from "../../components/create_account/license-information.screen";
import { VehicleInformationScreen } from "../../components/create_account/vehicle-information.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


type UserAccountData = {
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    state: string;
    city: string;
    zipCode: string;
    
}

export type AccountStackParamList = {
    "Create Account": undefined;
    "License Number": {userData:UserAccountData};
    "Vehicle Information": {userData:UserAccountData, licenseNumber: string};
};

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

export const CreateAccountNavigator = () => {

    

    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="Create Account" component={CreateAccountScreen} />
            <AccountStack.Screen name="License Number" component={LicenseInformationScreen} />
            <AccountStack.Screen name="Vehicle Information" component={VehicleInformationScreen} />
        </AccountStack.Navigator>
    )
}