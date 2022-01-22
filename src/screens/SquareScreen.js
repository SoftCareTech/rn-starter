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
    const setColor = (color, change) => {
        //color ==== red green blue
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
        }
    }
    return (<View>
        <ColorCounter
            onDecrease={() => setColor('red', -COLOR_INCREAMENT)}
            onIncrease={() => setColor('red', COLOR_INCREAMENT)}
            color={'Red'}
        />
        <ColorCounter
            onDecrease={() => setColor('green ', - COLOR_INCREAMENT)}
            onIncrease={() => setColor('green', COLOR_INCREAMENT)}
            color={'Green'}
        />
        <ColorCounter
            onDecrease={() => setColor('blue', - COLOR_INCREAMENT)}
            onIncrease={() => setColor('blue', COLOR_INCREAMENT)}
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