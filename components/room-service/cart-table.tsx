import React from "react";
import { View, Text} from "react-native";
import { DataTable, Provider } from "react-native-paper";
import CartTableRow from "./cart-table-row";


export default function CartTable(props: {cart:Offering[]}){
    const cartTableRows = props.cart.map(
        r=>
        <CartTableRow key = {r.desc} offering ={r}/>
    )

    return(
    <View>
        <View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Item</DataTable.Title>
                    <DataTable.Title>Price</DataTable.Title>
                </DataTable.Header>
                {cartTableRows}
            </DataTable>
        </View>
    </View>
    )


}