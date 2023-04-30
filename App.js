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
import UserMap from "./src/components/userMap";
import { LogBox } from 'react-native';
import StartTrip from "./src/components/StartTrip";
import AutoNavigate from "./src/components/navigateToAuto"

const Stack = createNativeStackNavigator();

const App=()=>{

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>

<Stack.Navigator>

<Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: 'Home',headerShown: false}}
        />

<Stack.Screen
          name="BookAuto"
          component={BookAuto}
          options={{title: 'Trip',headerShown: false}}
        />

<Stack.Screen
          name="TripBooked"
          component={TripBooked}
          options={{title: 'Trip Booked',headerShown: false}}
        />

<Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{title: 'Scan QR',headerShown: false}}
        />
        <Stack.Screen
          name="DriverLogin"
          component={DriverLogin}
          options={{title: 'Driver Login',headerShown: false}}
        />
        <Stack.Screen
          name="DriverTab"
          component={DriverTabView}
          options={{title: 'DriverTab',headerShown: true}}
        />

<Stack.Screen
          name="userMap"
          component={UserMap}
          options={{title: 'User Map',headerShown: false}}
        />

<Stack.Screen
          name="startTrip"
          component={StartTrip}
          options={{title: 'Start Trip',headerShown: false}}
        />

<Stack.Screen
          name="navigateAuto"
          component={AutoNavigate}
          options={{title: 'Auto Navigate',headerShown: false}}
        />


</Stack.Navigator>
 </NavigationContainer>
   
    
  )
   

}

export default App;  