import React from "react";
import { Authenticator, useAuthenticator, UseAuthenticator } from "@aws-amplify/ui-react-native";
import { NavigationContainer } from "@react-navigation/native"
import { AppNavigator } from "./app.navigator";
import { UserProfileContext } from "../../services/user/user.context";
import { useContext } from "react";
import { CreateAccountNavigator } from "./create-account.navigator";
// this route here is provided by useAuthenticator of aws...

const Navigation = () => {
    const { route } = useAuthenticator(context => [context.route]);
    const {  isLoading, isAuthAndLoaded, userProfileData } = useContext(UserProfileContext)
    console.log("auth sate ", isAuthAndLoaded, "isLoading", isLoading)

    return (
        <NavigationContainer>
            {(userProfileData === null) ?  <CreateAccountNavigator />: (route === 'authenticated' && isAuthAndLoaded  ? <AppNavigator />: <Authenticator />)}
        </NavigationContainer>
   
    )  
}

export default Navigation