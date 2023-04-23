import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TripDetails(props) {

  console.log("Trip Type : ",props.myRides)
  console.log("Trip Details : ",props.rideDetails)
  const [rideStatus, setRideStatus] = useState('new');

  const startTrip=()=>{
    setRideStatus("ongoing")
    props.RideStatusChange("ongoing")
    alert("Ride started")
  }

  const endTrip=()=>{
    setRideStatus("ended")
    props.RideStatusChange("ended")
    alert("Ride ended")
  }

  const navigate=()=>{
    alert("Open Google Maps.")
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.leftText}>Trip with {props.rideDetails[0].user_details.full_name}</Text>
        <Text style={styles.rightText}>₹ {props.rideDetails[0].trip_fare}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bottomText}>Pickup : {props.rideDetails[0].pickup_point}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bottomText}>Destination : {props.rideDetails[0].drop_point}</Text>
      </View>
      {props.myRides=== false && 
      <View style={styles.row}>
        {rideStatus==="new" && 
        <TouchableOpacity style={styles.button} onPress={startTrip}>
          <Text style={styles.buttonText}>Start Trip</Text>
        </TouchableOpacity>}

        {rideStatus==="ongoing" &&
        <View style={styles.row}>

        <TouchableOpacity style={styles.buttonEnd}>
          <Text style={styles.buttonText} onPress={endTrip}>End Trip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonNavigate}>
          <Text style={styles.buttonText} onPress={navigate}>Navigate</Text>
        </TouchableOpacity>

        </View>
      }

      </View>
      }
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
    button: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonEnd: {
    backgroundColor: '#FF3E3E',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonNavigate: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});
