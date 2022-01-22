import React, { useReducer } from 'react'
import { Text, FlatList, StyleSheet, View, Button } from 'react-native'
const reducer = (state, change) => {
    return state + change
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, 0)

    return <View>
        <Button title='Increase'
            onPress={() => dispatch(+ 1)}
        />
        <Button title='Decrease'
            onPress={() => dispatch(- 1)}
        />
        <Text>Current Count: {state}</Text>

    </View>
}
const styles = StyleSheet.create({

})
export default CounterScreen