import React from "react"
import {View,Text,SafeAreaView,StyleSheet,TextInput, Button,Alert} from "react-native"


const HomePage=({navigation})=>{

    return (
<SafeAreaView>
        <View>
        <Text style={styles.header}>Namma Yatri</Text>
        <Button
           title="Driver Flow"
           onPress={() =>
            navigation.navigate('DriverLogin',{navigation : navigation})
          }
         />
         
        <Button
           title="User Flow"
           onPress={() =>
            navigation.navigate('QRScanner', {navigation : navigation})
          }
            />
        </View>
        </SafeAreaView>
        
    )
}

const styles= StyleSheet.create({

    header : {
      backgroundColor:'black',
      fontSize: 20,
      color : "white",
      textAlign : "center"
  
    }
})

export default HomePage