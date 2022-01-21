import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';


const HomeScreen = ({navigation}) => { 
  return <View>
    <Text style={styles.text}>Hi there... I am going to follow step by step no jumping </Text>
    <Button
      title='Go to Component Demo'
      onPress={() =>    navigation.navigate('Components')
   }
    /> 
    <Button
      title='Go to List Demo'
      onPress={() =>   navigation.navigate('List')
      }
    /> 
     

  </View>
}


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
