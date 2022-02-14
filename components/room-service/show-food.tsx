import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { View, Text, FlatList, Button,} from "react-native";
import { StyleSheet } from "react-native"
import CartTable from "./cart-table";
import AsyncStorage from "@react-native-async-storage/async-storage"
import CartTableRow from "./cart-table-row";
import { v4 } from "uuid";



let cart:Offering[] = [];
let serviceRequest:ServiceRequest;
let soupTotal = 0;
let bisqueTotal = 0;
let bruleeTotal = 0;
let wellTotal = 0;
let burgerTotal = 0;


export default function ShowOfferings(){

    const [offerings, setOfferings] = useState<Offering[]>([]);
     
    async function getOfferings(){
        const response = await axios.get('http://20.75.160.73:3000/offerings')
        setOfferings(response.data);
    }

    useEffect(()=>{
        getOfferings()
    },[{cart}])

    async function SubmitOrder(){


        const response = await fetch(`http://20.75.160.73:3000/servicerequests`,{
                method:'POST',
                body:JSON.stringify({
                    id : "",
                    room : "",
                    status : "Ordered",
                    created : Date.now(),
                    requestedOffering: cart
                }), 
                headers:{
                'Content-Type':"application/json"
                }})
            if (response.status == 201){
                alert("Order Placed")
            }

    }

   
    

    return(<View>
        <View>
        <Text>Our Offerings</Text></View>
        <FlatList style = {{flex:1}} data = {offerings} renderItem={({item}) =>OfferingItem(item, cart)} keyExtractor = {item=>item.desc}/>
        <Text>View Cart</Text>
        <FlatList style = {{flex:1}} data = {cart} renderItem={({item})=>CartItem(item,cart)} keyExtractor = {item=>item.desc}/>
        <Button title="Submit Order" onPress = {SubmitOrder}/>

    </View>
    )

}

function OfferingItem(props:Offering, cart){

    return(
    <View style = {styles.reimbursement}>
        <Text>{props.desc}</Text>  
        <Text>Price: {props.cost}</Text>
        <Button title = "Add to Cart" onPress = {()=>cart.push(props)}></Button>
    </View>
    )
}
function CartItem(props:Offering, cart){

    return(
        <View>
            <Text>Item: {props.desc} Price:{props.cost}</Text>
        </View>

    )

}


const styles=StyleSheet.create({
    reimbursement:{
        backgroundColor: 'gray',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    container:{
        marginTop:25,
    },
    button:{
        alignItems: 'center',
        backgroundColor:'black',
        color:'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
})