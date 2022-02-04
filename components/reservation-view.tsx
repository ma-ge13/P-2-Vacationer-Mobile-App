/**
 * objective is: upon successful log in, to take in the reservation id for a given vacationer
 * and present their check in, check out, and room information
 * 
 */

import React from "react";
import { View, Text } from "react-native";
import Reservation from "../dtos/reservation-dto";


export default function ReservationViewer(props: {reservation:Reservation}){
    
  


    return(
    <View>
        <Text>Welcome {props.reservation.owner}!</Text>
        <Text>Check In: {props.reservation.checkIn}</Text>
        <Text>Check Out: {props.reservation.checkOut}</Text>
        <Text>Room: {props.reservation.room}</Text>

    </View>)

}