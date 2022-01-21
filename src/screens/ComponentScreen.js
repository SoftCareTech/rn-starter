//imports
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

//component
const ComponentScreen = () => {
    const myName = 'Gbenge Aondoakula Raphael'
    return (<View>
        <Text style={styles.textStyleSubHead} >Gettind started with React Native!</Text>
        <Text style={styles.textStyleBody} >My name is {myName} </Text>
    </View>)
}

// styles 
const styles = StyleSheet.create({
    textStyleSubHead: {
        fontSize: 45
    },
    textStyleBody: {
        fontSize: 20
    },
})

/// export
export default ComponentScreen