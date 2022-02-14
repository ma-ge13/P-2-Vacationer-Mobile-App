import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import LoginView from './components/login/login-view';
import ReservationViewer from './components/reservation/reservation-view';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReportProblem from './components/problem/report-problem';
import ActivityView from './components/activity/activity-view';


export default function App() {

  const Drawer = createDrawerNavigator();
  // let answer;
  
  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem('@reservation')
      // answer = jsonValue != null ? JSON.parse(jsonValue) : null;
      // console.log(answer);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(()=>{getData()},[]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginView} />
        <Drawer.Screen name="Reservation" component={ReservationViewer} />
        <Drawer.Screen name="Activities" component={ActivityView} />
        <Drawer.Screen name="Report a problem" component={ReportProblem} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}//end of App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b71bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
