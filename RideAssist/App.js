import React from "react"

import {View,Text,SafeAreaView,StyleSheet} from "react-native"

const App =()=>{

  return (
    <SafeAreaView style={styles.wrapper}>
    <View>
      <Text style={styles.container}>Current Weather</Text>
      <Text style={styles.temp}>35</Text>
      <Text style={styles.feels}>Feels like 40</Text>


    </View>
    </SafeAreaView>

  )
}

const styles= StyleSheet.create({

  container : {
    backgroundColor:'red',
    flex:1,
    alignItems: 'center',
    justifyContent : 'center'

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
    backgroundColor:'yellow',
    flex : 1

  }
})
export default App