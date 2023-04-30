import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {

  const navigation = useNavigation();

  const handleUserFlowClick = () => {
    // Handle user flow button click
    navigation.navigate('userMap', {navigation : navigation})

  };

  const handleDriverFlowClick = () => {
    // Handle driver flow button click
    navigation.navigate('DriverLogin',{navigation : navigation})

  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../public/assests/images/nammaQR.png')} // Replace with the actual path to your image
        style={styles.logo}
      />
      <Text style={styles.subtitle}>NAMMA QR</Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText} onPress={handleUserFlowClick}>User Flow</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText} onPress={handleDriverFlowClick}>Driver Flow</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
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
    width : 200

} ,
continueButtonText: {
    color: '#f4bb2d',
    fontSize: 16,
  },
});

export default HomePage;
