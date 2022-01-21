import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';


const HomeScreen = (props) => {
  console.log(props.navigation)
  return <View>
    <Text style={styles.text}>Hi there... I am going to follow step by step no jumping </Text>
    <Button
      title='Go to Component Demo'
      onPress={() => {
        props.navigation.navigate('Components')
      }}
    /> 
    <TouchableOpacity 
      onPress={() => {
        props.navigation.navigate('List')

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
