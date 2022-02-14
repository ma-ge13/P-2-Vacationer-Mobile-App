import React from "react";
import { Button, View } from "react-native";
import { DataTable } from "react-native-paper";
import ShowOfferings from "./show-food";


export default function CartTableRow(props:{offering:Offering}){

    return(
        <DataTable.Row>
            <DataTable.Cell>
                {props.offering.desc}
            </DataTable.Cell>

            <DataTable.Cell>
                {props.offering.cost}
            </DataTable.Cell>

            <DataTable.Cell>
                <Button title = "Remove" onPress = {()=>[]}/>
            </DataTable.Cell>
            
        </DataTable.Row>
)
}