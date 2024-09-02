import React from "react";
import { useContext } from "react";

import {Text, View, Button, SafeAreaView} from "react-native"
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { UserProfileContext } from "../../../services/user/user.context";



const HomeScreen = () => {
    const { user, signOut } = useAuthenticator((context)=>[context.user]);
    const { userData } = useContext(UserProfileContext)


    console.log("usr data:",userData)
    return (
        <SafeAreaView>
            <Button title="Sign Out" onPress={signOut} />
            
                <Text>Welcome, {userData[0].firstName + " " + userData[0].lastName}</Text>
                <Text> Packaged insurance</Text>
                <Text> Create combo</Text>

                <Text>User address : {userData[0].address}</Text>
            
        </SafeAreaView>
    )
}

export default HomeScreen;