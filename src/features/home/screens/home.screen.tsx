import React from "react";
import { useContext } from "react";

import {Text, View, Button, SafeAreaView} from "react-native"
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { UserProfileContext } from "../../../services/user/user.context";



const HomeScreen = () => {
    const { user, signOut } = useAuthenticator((context)=>[context.user]);
    const { userProfileData, isLoading } = useContext(UserProfileContext)

    return (
        <SafeAreaView>
            <Button title="Sign Out" onPress={signOut} />
            
                <Text>Welcome, { userProfileData[0].firstName}</Text>
                <Text> Packaged insurance</Text>
                <Text> Create combo</Text>

                <Text>User address : {userProfileData[0].lastName}</Text>
            
        </SafeAreaView>
    )
}

export default HomeScreen;