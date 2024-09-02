import React, { Children, useEffect } from "react";
import { useState, createContext, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { GraphQLError } from "graphql";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const client = generateClient<Schema>()

type UserContextType = {
    userData: Schema["UserPersonalData"]["type"][],
    isLoading: boolean
}

export const UserProfileContext = createContext<any>({userData:{}})

export const UserProfileContextProvider = ({ children }: {children: React.ReactNode} ) => {

    const { user, signOut } = useAuthenticator((context)=>[context.user]);
    const [userData, setUserData] = useState<Schema["UserPersonalData"]["type"][]>([]);
    const [errors, setErrors] = useState<GraphQLError>();
    const [isLoading, setisLoading] = useState<boolean>(false);

    const createUser = async () => {
        

        try {
            await client.models.UserPersonalData.create({
                firstName: "Mohan",
                lastName: "Nataraj",
                phone: "7787895311",
                address: "2935 W 15th Avenue",
                state_province: "British Columbia",
                city: "Vancouver",
                zipCode: "VK63A2"
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

            useEffect(()=>{
                const fetchUser = async () => {
                    const {data: items, errors } = await client.models.UserPersonalData.list()
                        setUserData(items)  
                        console.log("This is user data from setUserData",userData)    
                }
                 fetchUser()
            
                console.log("user attributes", user.signInDetails, user.username)
            },[])
            
    return (
        <UserProfileContext.Provider 
        value={{
            userData,
            isLoading
        }}>
        { children }
        </UserProfileContext.Provider>
    )
}


const styles = StyleSheet.create({
    signOutButton: {
      alignSelf: "flex-end",
    },
  });