/**
 * objective is: upon successful log in, to take in the reservation id for a given vacationer
 * and present their check in, check out, and room information
 * 
 */

 import React, { useState } from "react";
 import { View, Text } from "react-native";
 import Reservation from "../dtos/reservation-dto";
 
 
 //child of log in view from information flow perspective
     export default function ReservationViewer({route}){  
  
         const {jsonString} = route.params;
         const tempRes:Reservation =  JSON.parse(jsonString);
 
         const [reservation, setReservation] = useState<Reservation>(tempRes);
 
 
 
     return(
     <View>  
      <Text>Welcome {reservation.owner}!</Text>
         <Text>Check In: {reservation.checkIn} </Text>
         <Text>Check Out: {reservation.checkOut} </Text>
         <Text>Room: {reservation.room} </Text>
     </View>)
 
 }//end of ReservationViewer