import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import { Text, Touchable, TouchableOpacity, View }from "react-native";
import { AccountStackParamList } from "../../infrastructure/navigation/create-account.navigator";

type vehiclePropType =  NativeStackScreenProps<AccountStackParamList,"Vehicle Information">

export const VehicleInformationScreen = (prop:vehiclePropType) => {
    const {navigation,route} = prop;
    console.log(route.params);

    return(
        <View>
            <Text>This is vehicle information screen</Text>
            <TouchableOpacity onPress={()=>{console.log("submit form obj", route.params)}}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}