import React, { useReducer } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from '../component/ColorCounter'
//Square
const COLOR_INCREAMENT = 15
const reducer = (state, action) => {
// state === {red:number,green:number,blue:number}
// action ==={type:'change_red'||'change_green'||'change_blue'}
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload }

        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload }
        default: return state
    }
}
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

    return (<View>
        <ColorCounter
            onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREAMENT })}
            onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREAMENT })}
            color={'change_red'}
        />
        <ColorCounter
            onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREAMENT })}
            onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREAMENT })}

            color={'change_green'}
        />
        <ColorCounter
            onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREAMENT })}
            onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREAMENT })}

            color={'change_blue'}
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