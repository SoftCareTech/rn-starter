//imports
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

//Box
const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.textStyle1} >Box 1</Text>
        <Text style={styles.textStyle2} >Box 2</Text>
        <Text style={styles.textStyle3} >Box 3</Text>

    </View>)
}

// styles 
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 234,

    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red'

    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0

    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
    }
})

/// export
export default BoxScreen