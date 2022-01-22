import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

//component
const TextScreen = () => {
    const [password, setPassword] = useState('')

    return (<View>
        <Text  >Enter Password </Text>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 4 ? <Text>Password must at lease four characters </Text> : null}
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