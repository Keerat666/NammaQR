import React, { useState, useEffect } from "react"

import {View,Text,SafeAreaView,StyleSheet,TextInput, Button,Alert} from "react-native"

const BookAuto =(props)=>{
  const [pickup, setPickup] = React.useState('');
  const [drop, setDrop] = React.useState('');
  const [mobile, setMobile] = React.useState('');

  const [driverName, setDriverName] = React.useState('');
  const [autoNumber, setautoNumber] = React.useState('');


useEffect(() => { 
  // here is where you make API call(s) or any side effects
  fetch(
    "https://rideassist.onrender.com/api/v1/drivers/DriverByID?_id="+props.route.params.driverID)
                .then((res) => res.json())
                .then((json) => {

                  console.log(json.full_name)
                    setDriverName(json.full_name)
                    setautoNumber(json.auto_number)
                })
}, [] )

const initiateTrip=()=>{

  if(pickup==="" || drop==="")
  {
    Alert.alert('Please fill all the fields.')

  }
  else
  {
    //trigger initiate trip api

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let data = {"pickup_point":  pickup,"drop_point": drop,"pickup_coordinates": "test","drop_coordinates": "test2","user_mobile": mobile,"driver_id": props.route.params.driverID};

    var requestOptions = {
      method: 'POST',
      body : JSON.stringify(data),
      headers: myHeaders,
      redirect: 'follow'
    };

fetch("https://rideassist.onrender.com/api/v1/trips/initiateTrip", requestOptions)
  .then(response => response.text())
  .then(result =>{console.log(result)
  
    alert("Trip Request Initiated!!")
    console.log(props.route.params)
    props.route.params.navigation.navigate('TripBooked')

  } )
  .catch(error => {
    
    console.log('error', error)
    alert("Oops encountered an error.")
  
  });
  }
}


  return (
    <SafeAreaView style={styles.wrapper}>
     <Text style={styles.header} >Book Your Auto!</Text>

    <View style={styles.container}>
    {driverName!=="" && <View style={styles.rideDetails}>
      <Text>Ride Details : </Text>
      <Text>Name : {driverName} </Text>
      <Text>Auto Number is : {autoNumber} </Text>
      <Text>Please enter the rest of the details to initiate your trip.</Text>
      </View>}


      <TextInput
        style={styles.input}
        onChangeText={setMobile}
        value={mobile}
        placeholder="Enter your mobile number"
      />

<TextInput
        style={styles.input}
        onChangeText={setPickup}
        value={pickup}
        placeholder="Enter Pickup Location"
      />

<TextInput
        style={styles.input}
        onChangeText={setDrop}
        value={drop}
        placeholder="Enter Drop Location"
      />



<Button
        title="Start Trip"
        onPress={initiateTrip}
      />
    </View>
    </SafeAreaView>

  )
}



const styles= StyleSheet.create({

  container : {
    backgroundColor:'white',
    marginTop : 40

  },

  rideDetails : {
    backgroundColor:"white",
    textAlign: "center",
    margin : 12
  },

  header : {
    fontSize : 35,
    textAlign:'center'
  },

  temp : {
fontSize: 48,
color:'black'
  },

  feels : {
    fontSize: 32,
    color:'black'
      },

  wrapper:{
    backgroundColor:'white',
    flex : 1

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
export default BookAuto