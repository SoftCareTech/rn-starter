//imports
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

//Color
const ColorScreen = () => {
    return (<View>
        <Button title='Add Color' />

       
        <View style={{
            height: 100,
            width: 100,
            backgroundColor: randomRGB()
        }} />
       
    </View>)
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`

}
// styles 
const styles = StyleSheet.create({

})

/// export
export default ColorScreen