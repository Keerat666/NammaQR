import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function QRScanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const getDriverStatus=async(id)=>{

    fetch(
        "https://rideassist.onrender.com/api/v1/drivers/DriverByID?_id="+id)
                    .then((res) => res.json())
                    .then((json) => {
    
                        console.log(json.qrRideStatus)

                        if(json.qrRideStatus==="Active")
                        {
                            navigation.navigate('BookAuto',{driverID: id, navigation : navigation})

                        }
                        else if(json.qrRideStatus==="Inactive")
                        {
                            alert(json.auto_number+" is not accepting rides by QR right now.")
                        }
                        else
                        {
                            alert("Error Encountered!")
                        }

                    })
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log("Data : ",data)
    getDriverStatus(data)


  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
