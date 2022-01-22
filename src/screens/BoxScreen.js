//imports
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

//Box
const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.textStyle} >Box 1</Text>
        <Text style={styles.textStyle} >Box 2</Text>
        <Text style={styles.textStyle} >Box 3</Text>

    </View>)
}

// styles 
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 234,
        flexDirection: 'row-reverse',
        alignItems: 'flex-start'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
})

/// export
export default BoxScreen