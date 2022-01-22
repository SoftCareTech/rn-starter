import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

//component
const TextScreen = () => {
    const [name, setName] = useState('')

    return (<View>
        <Text  >Text Screen </Text>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text  >my name  is {name} </Text>
    </View>)
}

// styles 
const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

/// export
export default TextScreen