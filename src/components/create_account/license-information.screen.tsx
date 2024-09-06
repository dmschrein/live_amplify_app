import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";

import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import { AccountStackParamList } from "../../infrastructure/navigation/create-account.navigator";
import { Button, TextInput } from "react-native-paper";

type licensePropsType = NativeStackScreenProps<AccountStackParamList, "License Number">

export const LicenseInformationScreen = (props:licensePropsType) => {

    const {navigation,route} = props;
    const {firstName, lastName,phone,address,city,state,zipCode} = route.params.userData;
    const [licenseNumber,setLicenseNumber] = useState<string>();

    const gotoNext = () => {
       // console.log("First Name from lic");
        navigation.navigate("Vehicle Information",{userData:{firstName,lastName,phone,address,city
            ,state,zipCode
        }, licenseNumber: licenseNumber!})
    }
    
    return(
        <View style={styles.container}>
            <Text>This is license information screen</Text>
            <TextInput label="License Number" mode="outlined" style={{width:300, marginBottom:5}} value={licenseNumber} onChangeText={(text)=> setLicenseNumber(text)}/>

            <TouchableOpacity onPress={gotoNext}>
                <Button mode="outlined" style={{width:300}}>Next</Button>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})