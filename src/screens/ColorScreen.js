//imports
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

//Color
const ColorScreen = () => {
    const [colors, setColor] = useState([])
    console.log(colors)
    return (<View>
        <Button title='Add Color' onPress={() => {
            setColor([...colors, randomRGB()])
        }} />
        <FlatList data={colors}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
                return <View style={{
                    height: 100,
                    width: 100,
                    backgroundColor: item
                }} />

            }}
        />

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