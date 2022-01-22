//imports
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

//Box
const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.textStyle} >Box Screen</Text>

    </View>)
}

// styles 
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        margin: 40,
        padding:10,
        paddingVertical:20
    }
})

/// export
export default BoxScreen