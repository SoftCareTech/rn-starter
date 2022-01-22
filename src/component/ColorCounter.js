import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

//Square
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (<View>
        <Text>{color} </Text>
        <Button
            title={`Increase ${color}`}
            onPress={() => onIncrease()}
        />
        <Button
            onPress={() => onDecrease()}
            title={`Decrease ${color}`}
        />
       
    </View>)
}

// styles 
const styles = StyleSheet.create({

})

/// export
export default ColorCounter