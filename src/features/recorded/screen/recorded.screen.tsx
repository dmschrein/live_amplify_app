import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { UserProfileContext } from "../../../services/user/user.context";


export const RecordedVideos = () => {
    const { userData } = useContext(UserProfileContext)

    return (
        <SafeAreaView>
            <Text> This is recorded videos screen !!! {userData[0].address}</Text>
        </SafeAreaView>
    )
}