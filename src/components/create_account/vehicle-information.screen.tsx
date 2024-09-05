import React from "react";

import { Text, Touchable, TouchableOpacity, View }from "react-native";


export const VehicleInformationScreen = () => {
    return(
        <View>
            <Text>This is vehicle information screen</Text>
            <TouchableOpacity onPress={()=>{console.log("submit form obj")}}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}