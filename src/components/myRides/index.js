import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MyRides(props) {

  console.log("Trip details : ",props.myRides)


  return (
      
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.leftText}>Trip with {props.myRides.user_details.full_name}</Text>
        <Text style={styles.rightText}>₹ {props.myRides.trip_fare}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bottomText}>Pickup : {props.myRides.pickup_point}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bottomText}>Destination : {props.myRides.drop_point}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  leftText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 16,
    color: 'green',
  },
  bottomText: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
