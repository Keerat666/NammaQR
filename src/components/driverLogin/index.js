import { Text,TextInput, View, StyleSheet, Button, SafeAreaView, TouchableOpacity, Keyboard} from 'react-native';
import React, { useState } from 'react';


export default function DriverLogin(props) {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value) => {
        if (value.length < 10) {
          setPhoneNumber(value);
        } else if(value.length === 10){
          setPhoneNumber(value);
          Keyboard.dismiss();
        }
      };

      const triggerLogin=()=>{
        fetch(
            "https://rideassist.onrender.com/api/v1/drivers/DriverByMobile?phone_no="+phoneNumber)
                        .then((res) => res.json())
                        .then((json) => {
        
                          console.log(json)

                          if(json.err === "id not found")
                          {
                              alert("Id not found!")
                              setPhoneNumber("")
                          }
                          else if(json.err === "")
                          {
                              console.log(json)
                              props.route.params.navigation.navigate('DriverTab',{navigation : props.route.params.navigation, data : json.data})

                          }
                          
                        })
      }

    return (
      <SafeAreaView style={styles.containerHead}>

<Text style={styles.header}>Enter Mobile Number</Text>
  
  <Text style={styles.subtitle}>Enter your Mobile Number</Text>

  <View style={styles.container}>
    <TextInput
      placeholder=""
      style={styles.input}
      keyboardType="numeric"
      value={phoneNumber}
      onChangeText={handlePhoneNumberChange}
    />
  </View>

        <View style={styles.contentContainer}>
       
  
          <View style={styles.footer}>
            <Text style={styles.footerHeading}>By tapping continue</Text>
            <Text style={styles.footerTC}>You agree that you are accepting the T&amp;C</Text>
  
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText} onPress={triggerLogin}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    containerHead: {
      flex: 1,
      backgroundColor: 'white',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    header: {
      fontSize: 22,
      textAlign: 'left',
      color: '#454545',
      marginBottom: 25,
      marginTop: 20,
      marginLeft: 10,
      fontWeight : "bold"
    },
    subtitle: {
      fontSize: 12,
      textAlign: 'left',
      color: '#6a6a6a',
      marginBottom: 10,
      marginLeft: 10,
    },
    container: {
      height: 30,
      backgroundColor: 'white',
    },
    input: {
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#e3e3e3',
      marginRight: 10,
      marginLeft : 10,
      height: 60,
      borderRadius: 5, 
      color : '#454545',
      padding : 18,
      fontWeight : 'bold'



    },
    footer: {
      height: 50,
      position: 'absolute',
      bottom: 0,
      marginBottom : 60,
      width : '100%'
      
    },
    footerHeading : {
        color : "#6d727f",
        marginLeft: 25,
        fontSize : 12

    },
    footerTC : {
        color : "#2a80fe",
        marginLeft: 25,
        fontSize : 12,
        fontWeight : "bold"


    },
    continueButton : {
        backgroundColor: '#2c2e3b',
        backgroundColor: '#2c2e3b',
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: "#2c2e3b",
        marginLeft: 20,
        marginRight: 20, // add padding

    
    } ,
    continueButtonText: {
        color: '#f4bb2d',
        fontSize: 16,
      },
  });
  