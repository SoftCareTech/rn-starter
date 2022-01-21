import React, { useState } from 'react'
import { Text, FlatList, StyleSheet, View, Button } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    // don't assign to counter  but use setCounter function
    return <View>
        <Button title='Increase'
            onPress={() => {
                setCounter(counter + 1)
            }} />
        <Button title='Decrease'
            onPress={() => {
                setCounter(counter - 1)
            }} />
        <Text>Current Count: {counter}</Text>
    </View>
}
const styles = StyleSheet.create({

})
export default CounterScreen