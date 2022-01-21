import React from 'react'
import { Text, FlatList, StyleSheet, View,Image } from 'react-native'
import ImageDetail from "../component/ImageDetails";

import imgSrcF from '../../assets/forest.jpg';
import imgSrcB from '../../assets/beach.jpg';
import imgSrcM from '../../assets/mountain.jpg';

const ImageScreen = () => {
    // imgageSource={require('../../assets/forest.jpg')} />
    return <View>
        <Text>Hello</Text>
        <Image source={{ uri: imgSrcF }} style={style.image} />
        <ImageDetail title='Forest'
            imgageSource={imgSrcF} />
        <ImageDetail title='Moutain'
            imgageSource={imgSrcM} />
        <ImageDetail title='Beach'
            imgageSource={imgSrcB} />
    </View>
}
const style = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderWidth: 1
    }
})
export default ImageScreen