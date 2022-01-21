import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hi there... I am going to follow step by step no jumping </Text>
    <Button
      title='Go to Component Demo'
      onPress={() => {
        console.log("Componet press")
      }}
    /> 
    <TouchableOpacity 
      onPress={() => {
        console.log("list press")
      }}>
      <Text>Go to list Demo</Text>
    </TouchableOpacity>

  </View>
}


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
