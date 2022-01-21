import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'

import imgSrcM from '../../assets/mountain.jpg';
const ImageDetail = (props) => {
    console.log(props)
    // <Image source={props.imageSource} />
    return <View>
        <Image source={{ uri: props.imageSource }}
            style={styles.image} />
        <Text> {props.title} </Text>
    </View>
}
const styles = StyleSheet.create({
    image: {
        width: '150px',
        height: '150px',
        borderWidth: 1
    }
})
export default ImageDetail