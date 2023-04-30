import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartTrip = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    // Navigate to the next page here
    navigation.navigate('QRScanner');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../public/assests/images/findAuto.jpg')} // Replace with the actual path to your image
        style={styles.image}
      />

      <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText} onPress={handleButtonClick}>Scan QR to Start Ride</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: 500,
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
        width : 300

    
    } ,
    continueButtonText: {
        color: '#f4bb2d',
        fontSize: 16,
      },
});

export default StartTrip;
