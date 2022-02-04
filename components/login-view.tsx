import { View, Text, TextInput, Button, Alert } from "react-native";
import Reservation from "../dtos/reservation-dto";

// login page
//sole focus is authentication based on valid username and password
//http://52.146.51.210:3000/

//make the reservation/component

export default function LoginView(){ //prop needed? maybe passing in the 

    const vacationer:Reservation ={
        id: "009",
        checkIn: 1000,
        checkOut: 20000,
        owner: "Joe Burreaux",
        room: "SB MVP SUITE"
    }

    

    let tempResID
    
   //develop function that reads the user input into a temp variable 

    function grabResId(reservation:string){
        tempResID = reservation;            
    }

    /** 
    if reservation exists, load reservation information
    to view: check-in, check-out, room
    else return reservation not found page to view


    */
    function loadReservation(){
        if (vacationer.id === tempResID) {
            //create a component that will handle loading information
            //of a valid reservation and it will be called here


        } else {
            Alert.alert("Reservation not found. Please check entry and try again.");
        }

    }

   
    return(
    <View>
        <Text>Welcome to Paradise Villas log in</Text>
        <TextInput onChangeText={grabResId} placeholder="Reservation ID"/>
        <Button onPress={loadReservation} title="Submit Reservation Id" />


    </View>)


}