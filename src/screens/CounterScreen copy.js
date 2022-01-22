import React, { useState } from 'react'
import { Text, FlatList, StyleSheet, View, Button } from 'react-native'
let c = 5
const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    // don't assign to counter  but use setCounter function
   
    return <View>
        <Button title='Increase'
            onPress={() => {
                c++
                setCounter(counter + 1)
            }} />
        <Button title='Decrease'
            onPress={() => {
                c--
                setCounter(counter - 1)
            }} />
        <Text>Current Count: {counter}</Text>

        <Text>Current wild: {c}</Text>

    </View>
}
const styles = StyleSheet.create({

})
export default CounterScreen