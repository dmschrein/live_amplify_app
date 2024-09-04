import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { UserProfileContext } from "../../../services/user/user.context";


export const RecordedVideos = () => {
    const { userProfileData } = useContext(UserProfileContext)

    return (
        <SafeAreaView>
            <Text> This is recorded videos screen !!! {userProfileData.address}</Text>
        </SafeAreaView>
    )
}