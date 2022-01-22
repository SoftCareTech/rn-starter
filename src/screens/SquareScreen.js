import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from '../component/ColorCounter'
//Square
const COLOR_INCREAMENT = 10
const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    console.log(red)
    console.log(green)
    console.log(blue)
    return (<View>
        <ColorCounter
            onDecrease={() => setRed(red - COLOR_INCREAMENT)}
            onIncrease={() => setRed(red + COLOR_INCREAMENT)}
            color={'Red'}
        />
        <ColorCounter
            onDecrease={() => setGreen(green - COLOR_INCREAMENT)}
            onIncrease={() => setGreen(green + COLOR_INCREAMENT)}
            color={'Green'}
        />
        <ColorCounter
            onDecrease={() => setBlue(blue - COLOR_INCREAMENT)}
            onIncrease={() => setBlue(blue + COLOR_INCREAMENT)}
            color={'Blue'}
        />

        <View style=
            {{
                height: 200,
                width: 200,
                backgroundColor: `rgb(${red}, ${green},${blue})`
            }}
        />
    </View>)
}

// styles 
const styles = StyleSheet.create({

})

/// export
export default SquareScreen