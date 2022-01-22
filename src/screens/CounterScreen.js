import React, { useReducer } from 'react'
import { Text, FlatList, StyleSheet, View, Button } from 'react-native'
const reducer = (state, action) => {
    // state == {count:number}
    // action == {type:'increament||decreament', paload:1}
    switch (action.type) {
        case 'increament':
            return { ...state, count: state.count + action.payload }
        case 'decreament':
            return { ...state, count: state.count - action.payload }
        default:
            return state
    }
    return state + change
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return <View>
        <Button title='Increase'
            onPress={() => dispatch({ type: 'increament', payload: 1 })}
        />
        <Button title='Decrease'
            onPress={() => dispatch({ type: 'decreament', payload: 1 })}
        />
        <Text>Current Count: {state.count}</Text>

    </View>
}
const styles = StyleSheet.create({

})
export default CounterScreen