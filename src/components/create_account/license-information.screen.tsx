import React from "react";

import { View, Text, TouchableOpacity } from "react-native";


export const LicenseInformationScreen = ({navigation}:{navigation:any}) => {
    return(
        <View>
            <Text>This is license information screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Vehicle Information")}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )

}