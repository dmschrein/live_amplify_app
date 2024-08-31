import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { GraphQLError } from "graphql";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const client = generateClient<Schema>()

const UserProfile = () => {

    const { user, signOut } = useAuthenticator((context)=>[context.user]);
    const [userData, setUserData] = useState<Schema["UserPersonalData"]["type"][]>([]);
    const [errors, setErrors] = useState<GraphQLError>();

    const createUser = async () => {
        

        try {
            await client.models.UserPersonalData.create({
                firstName: "Mohan",
                lastName: "Nataraj",
                phone:"7787895311",
                address: "2935 W 15th Avenue Vancouver BC VK63A2"
            })
        }catch(error:unknown){
            if (error instanceof GraphQLError){
                setErrors(error)
            }else {
                throw error
            }
        }finally {
            console.log("created successfully")
        }
    }

    const fetchUser = async () => {
        const {data: items, errors } = await client.models.UserPersonalData.list();
        console.log("call: ", await client.models.UserPersonalData.list({
            authMode:"userPool"
        }))
        console.log("this is user data fetched", items)
    }

    return (
       
    <View style={styles.signOutButton}>
        <Text>{`Welcome, ${user.userId}`}</Text>
        <Button title="Sign Out" onPress={signOut} />
        <Button title="CreateUserData" onPress={createUser} />
        <Button title="FetchUserData" onPress={fetchUser} />
      </View>
        
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    signOutButton: {
      alignSelf: "flex-end",
    },
  });