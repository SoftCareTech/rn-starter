import React from 'react'
import { Text, FlatList, StyleSheet, View } from 'react-native'
import ImageDetail from "../component/ImageDetails";

const ImageScreen = () => {
    return <View>
        <ImageDetail title='Forest'/>
        <ImageDetail title='Moutain'/>
        <ImageDetail title='Beach'/>
    </View>
}
const style = StyleSheet.create({

})
export default ImageScreen