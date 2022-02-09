import { View, Text, TextInput, Button, Alert } from "react-native";
import Reservation from "../dtos/reservation-dto";
import { useState } from "react";
import React from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function LoginView({navigation}){

    


    
    const [resId, setResId] = useState("");
  
    


    /** 
    if reservation exists, load reservation information
    to view: check-in, check-out, room
    else return reservation not found page to view
    */
    async function loadReservation(){

        try {
            const response = await axios.get(`https://6894f2cd-bb6a-4979-8499-21dcd8a06fd1.mock.pstmn.io/reservations/${resId}`)
            const grabbedRes:Reservation = response.data;
            const jsonString = JSON.stringify(grabbedRes);
            await AsyncStorage.setItem('@reservation', jsonString);
            
            
            //setReservation(grabbedRes);
           navigation.navigate('ReservationViewer', {jsonString});




        } catch (error) {
            console.log(error);
            Alert.alert("Reservation not found. Please check entry and try again.");
        }

    }

   
    return(    
        <View>
            <Text>Welcome to Paradise Villas log in</Text>
            <TextInput onChangeText={setResId} placeholder="Reservation ID"/>
            <Button onPress={loadReservation} title="Submit Reservation Id" />
        </View>
    
    )

}