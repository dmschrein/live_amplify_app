import React, { Children, useEffect } from "react";
import { useState, createContext, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { GraphQLError } from "graphql";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient<Schema>()

type UserContextType = {
    userData: Schema["UserPersonalData"]["type"][],
}


  

    export const addUserProfile = async () : Promise<any> => {
    return  await client.models.UserPersonalData.create({
                firstName: "Mohan",
                lastName: "Nataraj",
                phone: "7787895311",
                address: "2935 W 15th Avenue",
                state_province: "British Columbia",
                city: "Vancouver",
                zipCode: "VK63A2",
                user_id: ((await getCurrentUser()).userId)
            }).then(result => console.log("successfully added!!!")).then(result => console.log("result is : ",result))
    } 
//We can call this function currently doesn't do anything but later we can fix while... code optimization.
    // export const fetchUser = async () => {
    // const userToGet = (await getCurrentUser()).userId
    // const { data: items, errors } = await client.models.UserPersonalData.get({user_id:userToGet});
    // console.log("This is user data from items from FETCH USER:", items);
    // return items as UserContextType["userData"];

//}
           



const styles = StyleSheet.create({
    signOutButton: {
      alignSelf: "flex-end",
    },
  });