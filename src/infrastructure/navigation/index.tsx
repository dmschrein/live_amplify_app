import React from "react";
import { Authenticator, useAuthenticator, UseAuthenticator } from "@aws-amplify/ui-react-native";
import { NavigationContainer } from "@react-navigation/native"
import { AppNavigator } from "./app.navigator";
import { UserProfileContext } from "../../services/user/user.context";
import { useContext } from "react";
// this route here is provided by useAuthenticator of aws...

const Navigation = () => {
    const { route } = useAuthenticator(context => [context.route]);
    const { userData, isLoading } = useContext(UserProfileContext)


    return (
        <NavigationContainer>
           { route === 'authenticated' && isLoading ? <AppNavigator />: <Authenticator /> }
        </NavigationContainer>
   
    )  
}

export default Navigation