import React from "react";

import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export const CreateAccountScreen = ({navigation}:{navigation:any}) =>{

    return(
        <View>
            <Text>Create Account Screen</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("License Number")}>
                <Text>Next</Text>
            </TouchableOpacity>

        </View>
    )
}