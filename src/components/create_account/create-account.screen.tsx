import React, { useEffect, useState } from "react";

import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AccountStackParamList } from "../../infrastructure/navigation/create-account.navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as Yup from 'yup';

type accountPropsType = NativeStackScreenProps<AccountStackParamList,"Create Account">


const userDataSchema = Yup.object({
    firstName: Yup.string().required().matches(/^[a-zA-Z'-\s]*$/, 'Invalid name')
    .min(2, 'use a valid first name')
    .max(15, 'use a valid first name'),
    lastName: Yup.string().required().matches(/^[a-zA-Z'-\s]*$/, 'Invalid name')
    .min(2, 'use a valid last name')
    .max(15, 'use a valid last name'),
    phone: Yup.string().required().matches(/^\d+$/,'Invalid number').max(10,'Enter a valid number'),
    address: Yup.string().required().matches(/^[a-zA-Z'-\s]*$/, 'Invalid name')
    .min(5, 'use a valid address')
    .max(30, 'use a valid address'),
    city: Yup.string().required().matches(/^[a-zA-Z'-\s]*$/, 'Invalid name')
    .min(2, 'use a valid city')
    .max(15, 'use a valid city'),
    state: Yup.string().required().matches(/^[a-zA-Z'-\s]*$/, 'Invalid name')
    .min(2, 'use a valid state')
    .max(15, 'use a valid state'),
    zipCode: Yup.string().required().matches(/^\d+$/, 'Invalid number').max(5, 'Enter a valid zip code')
})

export const CreateAccountScreen = (props:accountPropsType) =>{

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [address,setAddress] = useState<string>();
    const [state,setState] = useState<string>();
    const [city,setCity] = useState<string>();
    const [zipCode,setZipCode] = useState<string>();

    const [firstError, setFirstError] = useState<boolean>(false);
    const [lastError, setLastError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [addressError, setAddressError] = useState<boolean>(false);
    const [cityError, setCityError] = useState<boolean>(false);
    const [stateError, setStateError] = useState<boolean>(false);
    const [zipCodeError, setZipCodeError] = useState<boolean>(false);

    const [isFormValid,setIsFormValid] = useState<boolean>(false);
    const [errors,setErrors] = useState<any>({});
    

    const {navigation} = props;

    useEffect(()=>{
        
    },[isFormValid]);

    const gotoNext = () => { 
        validateForm();
       if(isFormValid){
             navigation.navigate("License Number",{userData: {firstName:firstName!, lastName:lastName!, 
            address:address!,city:city!, state:state!, zipCode:zipCode!, phone:phone!}
             });
        console.log("Form is valid")
       }
    
       
        
    }//end of gotoNext

    const validateForm = async () =>{

        
       try {
        await userDataSchema.validate({firstName:firstName!, lastName:lastName!,
            address:address!,city:city!, state:state!, zipCode:zipCode!, phone:phone!}, {abortEarly:false});
            setErrors({}); 
            setIsFormValid(true);
            
       }catch(error){
        setIsFormValid(false);

        if(error instanceof Yup.ValidationError){
            const newErrors : Record<string,string> = {}
            error.inner.forEach((err)=>{
                if(err.path!== undefined){
                newErrors[err.path] = err.message;
                }
                
            })
            setErrors(newErrors);
        }
       
        setIsFormValid(false)
        
       }

        
        
    }
    

    return(
       
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={{flex:1, backgroundColor:"#fff", alignItems:"center"}}>
           <View style={styles.inner}>
            <Text>Create Account Screen</Text>
            <TextInput label="First Name" error={firstError}  mode="outlined" style={{width:300, marginBottom:5}} value={firstName} onChangeText={(text)=> {setFirstName(text);setIsFormValid(!firstName)}}/>
            {errors.firstName && <Text style={{color:"red"}}>{errors.firstName}</Text>}
            <TextInput label="Last Name"  mode="outlined" style={{width:300, marginBottom:5}} value={lastName} onChangeText={(text)=> {setLastName(text);setIsFormValid(!lastName)}}/>
            {errors.lastName && <Text style={{color:"red"}}>{errors.lastName}</Text>}
            <TextInput label="Phone" keyboardType="phone-pad"  mode="outlined" placeholder="(000)-(000) (0000)" style={{width:300, marginBottom:5}} value={phone} onChangeText={(text)=> {setPhone(text);setIsFormValid(!phone)}}/>
            {errors.phone && <Text style={{color:"red"}}>{errors.phone}</Text>}
            <TextInput label="Address"  mode="outlined" textContentType="fullStreetAddress"  style={{width:300, marginBottom:5}} value={address} onChangeText={(text)=> {setAddress(text);setIsFormValid(!address)}}/>
            {errors.address && <Text style={{color:"red"}}>{errors.address}</Text>}
            <TextInput label="City"  mode="outlined" textContentType="addressCity" style={{width:300, marginBottom:5}} value={city} onChangeText={(text)=> {setCity(text);setIsFormValid(!city)}}/>
            {errors.city && <Text style={{color:"red"}}>{errors.city}</Text>}
            <TextInput label="State"  mode="outlined" textContentType="addressState" style={{width:300, marginBottom:5}} value={state} onChangeText={(text)=> {setState(text);setIsFormValid(!state)}}/>
            {errors.state && <Text style={{color:"red"}}>{errors.state}</Text> }
            <TextInput label="Zip Code"  mode="outlined" style={{width:300, marginBottom:5}} value={zipCode} onChangeText={(text)=> {setZipCode(text);setIsFormValid(!zipCode)}}/>
            {errors.zipCode && <Text style={{color:"red"}}>{errors.zipCode}</Text> }
            <TouchableOpacity onPress={gotoNext} style={{marginTop:20}}>
                <Button mode="outlined" style={{width:300}}>Next</Button>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner:{
        flex:1,
        justifyContent:"space-around",
        padding:24
    }
})