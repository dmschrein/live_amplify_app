import React, { Children, useEffect } from "react";
import { useState, createContext, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { GraphQLError } from "graphql";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { addUserProfile } from "./user.service";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient<Schema>()

export const UserProfileContext = createContext<any>({})

export const UserProfileContextProvider = ({ children }: {children: React.ReactNode} ) => {

    const { user, signOut } = useAuthenticator((context)=>[context.user]);
    const [userProfileData, setUserProfileData] = useState<any>();
    const [errors, setErrors] = useState<GraphQLError>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const  [isAuthAndLoaded, setIsAuthAndLoaded] = useState<boolean>(false);

    

    const createUser =  () => {
        
        try {
             addUserProfile()
        }catch(error:unknown){
            if (error instanceof GraphQLError){
                 setErrors(error)
            }else {
                throw error
            }
        }finally {
            console.log("created successfully from createUser!!!")
             
        }
        
    }
    const getUser = async () => {
       try{ 
            

            const { data: items } = await client.models.UserPersonalData.list()
            console.log("ItEMSS FRO M ITE ", items, "user Auth ID : ", user.userId)
            setUserProfileData(items)
            setIsLoading(true)
            console.log("user data getUSer", userProfileData, "isLoading: ",isLoading)
       } catch(error){
        console.log("error",error)
       }finally{
          
        setIsAuthAndLoaded(true) 
        console.log("is Auth and Loaded :- ",isAuthAndLoaded)
       }
        
            

    }
        useEffect(()=> {
            getUser()
        },[])
    
            
    return (
        <UserProfileContext.Provider 
        value={{
            userProfileData,
            isLoading,
            isAuthAndLoaded,
            createUser
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