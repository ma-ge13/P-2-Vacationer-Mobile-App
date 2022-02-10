import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import LoginView from './components/login-view';
import ReservationViewer from './components/reservation-view';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
const Drawer = createDrawerNavigator();

let answer
async function getData() {
  try {
    const jsonValue = await AsyncStorage.getItem('@reservation')
    answer = jsonValue != null ?JSON.parse(jsonValue):null;
    console.log(answer);
  } catch(e) {
    console.log(e);
  }
}

useEffect(()=>{getData()},[]);


const [reservation, setReservation] = useState();

console.log(reservation);



return(
  
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="LoginViewer">
          <Drawer.Screen name="LoginViewer" component={LoginView} />
          <Drawer.Screen name="ReservationViewer" component={ReservationViewer} />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}//end of App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b71bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
