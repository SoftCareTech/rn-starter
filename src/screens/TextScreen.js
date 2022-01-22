import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

//component
const TextScreen = () => {
    const [name, setName] = useState('')

    return (<View>
        <Text  >Enter Password </Text>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        {name.length < 5 ? <Text>Password lenght small </Text> : null }
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