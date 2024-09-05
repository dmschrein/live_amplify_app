import React from "react";
import { useContext } from "react";

import {Text, View, Button, SafeAreaView} from "react-native"
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { UserProfileContext } from "../../../services/user/user.context";
import { TouchableOpacity } from "react-native-gesture-handler";



const HomeScreen = ({navigation}:{navigation:any}) => {
    const { user, signOut } = useAuthenticator((context)=>[context.user]);
    const { userProfileData, createUser } = useContext(UserProfileContext)
    console.log("user profile data:", userProfileData)
    return (
        <SafeAreaView>
            <Button title="Sign Out" onPress={signOut} />
            <Button title="Create User" onPress={createUser} />
               { (userProfileData)? <Text>Welcome, { userProfileData.firstName}</Text> : null }
               {(userProfileData)? <Text>User address : {userProfileData.address}</Text> :null}

               <TouchableOpacity onPress={()=>{navigation.navigate("Create Combo")}}>
                    <Text>Create Combo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate("Pre Packaged")}}>
                    <Text>Packaged insurance</Text>
                </TouchableOpacity>

        </SafeAreaView>
    )
}

export default HomeScreen;