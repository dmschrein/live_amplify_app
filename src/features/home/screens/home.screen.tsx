import React from "react";
import { useContext } from "react";

import {Text, View, Button, SafeAreaView} from "react-native"
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { UserProfileContext } from "../../../services/user/user.context";



const HomeScreen = () => {
    const { user, signOut } = useAuthenticator((context)=>[context.user]);
    const { userProfileData, createUser } = useContext(UserProfileContext)
    console.log("user profile data:", userProfileData[0])
    return (
        <SafeAreaView>
            <Button title="Sign Out" onPress={signOut} />
            <Button title="Create User" onPress={createUser} />
                <Text>Welcome, { userProfileData[2].firstName}</Text>
                <Text> Packaged insurance</Text>
                <Text> Create combo</Text>

                <Text>User address : {userProfileData[2].lastName}</Text>
            
        </SafeAreaView>
    )
}

export default HomeScreen;