import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DriverQrActive = (props) => {
  const [isActive, setIsActive] = useState("loading");

  useEffect(() => { 
    // here is where you make API call(s) or any side effects
    fetch(
      "https://rideassist.onrender.com/api/v1/drivers/DriverByID?_id="+props.data._id)
                  .then((res) => res.json())
                  .then((json) => {
                    let status = json.qrRideStatus==="Active"
                    setIsActive(status)
                  })
  }, [] )


  const handlePress = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    console.log(props.data._id)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let status = newStatus===true ? "Active" : "Inactive"
    let data = { "qrRideStatus": status ,"_id" : props.data._id }
    console.log(data)

    var requestOptions = {
      method: 'PUT',
      body : JSON.stringify(data),
      headers: myHeaders,
      redirect: 'follow'
    };

    // make PUT request
    fetch("https://rideassist.onrender.com/api/v1/drivers/edit", requestOptions)
      .then((response) =>response.json())
      .then((data) => {
          
        console.log(data)

        // if(data.UpdateStatus)
        //     alert("QR Status is now : "+status)
    
    })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>

        {isActive === "loading" && <Text>Loding current status.</Text>}

        {isActive !== "loading" && <View style={styles.container}> 

        <Text>Current QR Requests State is : {isActive===true ? "Active" : "Inactive"}</Text>

        {!isActive && <TouchableOpacity
        style={[styles.button,  styles.activeButton]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Activate QR Requests</Text>
      </TouchableOpacity>}

      {isActive && <TouchableOpacity
        style={[styles.button,styles.inactiveButton]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Disable QR Requests</Text>
      </TouchableOpacity>}

        </View> }
   

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#008000',
  },
  inactiveButton: {
    backgroundColor: '#FF3E3E',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DriverQrActive;
