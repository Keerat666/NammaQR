import React from "react"
import {SafeAreaView} from "react-native"
import BookAuto from "./src/components/bookCab/BookAuto"

import HomePage from "./src/components/homePage";
import TripBooked from "./src/components/tripBooked/index"

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QRScanner from "./src/components/qrScanner";
import DriverLogin from "./src/components/driverLogin"
import DriverTabView from "./src/components/DriverTabView"
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

const App=()=>{

  // LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>

<Stack.Navigator>

<Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: 'Home'}}
        />

<Stack.Screen
          name="BookAuto"
          component={BookAuto}
          options={{title: 'Trip'}}
        />

<Stack.Screen
          name="TripBooked"
          component={TripBooked}
          options={{title: 'Trip Booked'}}
        />

<Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{title: 'Scan QR'}}
        />
        <Stack.Screen
          name="DriverLogin"
          component={DriverLogin}
          options={{title: 'Driver Login',headerShown: false}}
        />
        <Stack.Screen
          name="DriverTab"
          component={DriverTabView}
          options={{title: 'DriverTab'}}
        />


</Stack.Navigator>
 </NavigationContainer>
   
    
  )
   

}

export default App;  