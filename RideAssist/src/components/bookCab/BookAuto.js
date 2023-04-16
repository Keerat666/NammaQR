import React from "react"

import {View,Text,SafeAreaView,StyleSheet,TextInput, Button,Alert} from "react-native"

const BookAuto =()=>{
  const [text, onChangeText] = React.useState('');

  
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.header}>Book Your Auto!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your Mobile Number"
      />

<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your Pickup Location"
      />

<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your Drop Location"
      />



<Button
        title="Book Auto"
        onPress={() => Alert.alert('Simple Button pressed')}
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