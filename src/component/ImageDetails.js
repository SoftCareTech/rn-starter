import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'

const ImageDetail = props => {
    return <View>
        <Image source={require('../../assets/beach.jpg')}/>
        <Text> {props.title} </Text>
    </View>
}
const style = StyleSheet.create({

})
export default ImageDetail