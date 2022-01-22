import React, { useReducer } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from '../component/ColorCounter'
//Square
const COLOR_INCREAMENT = 15
const reducer = (state, action) => {
    // state === { red: 0, green: 0, blue: 0 })
    //  action { color:k, valueChange:}

    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount }

        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount }
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount }
        default: return state
    }
}
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

    return (<View>
        <ColorCounter
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREAMENT })}
            onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREAMENT })}
            color={'Red'}
        />
        <ColorCounter
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREAMENT })}
            onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREAMENT })}

            color={'Green'}
        />
        <ColorCounter
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREAMENT })}
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREAMENT })}

            color={'Blue'}
        />

        <View style=
            {{
                height: 200,
                width: 200,
                backgroundColor: `rgb(${state.red}, ${state.green},${state.blue})`
            }}
        />
    </View>)
}

// styles 
const styles = StyleSheet.create({

})

/// export
export default SquareScreen