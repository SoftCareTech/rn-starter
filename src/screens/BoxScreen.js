//imports
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

//Box
const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <View style={styles.view1} />
        <View style={styles.view2_2} />
        <View style={styles.view3} />
    </View>)
}

//Exercise to in two ways for midle view have two styles
// that is styles.view2_1, styles.view2_2
// styles 
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 234,
        flexDirection: 'row'
        , justifyContent: 'space-between'
    },
    view1: {
        borderWidth: 1,
        borderColor: 'black', backgroundColor: 'yellow',
        height: 100,
        width: 100
    },
    view2_1: {
        borderWidth: 1,
        borderColor: 'black', backgroundColor: 'pink',
        height: 100,
        width: 100,
        top: 100
    },
    view2_2: {
        borderWidth: 1,
        borderColor: 'black', backgroundColor: 'pink',
        height: 100,
        width: 100,
        marginTop: 100
    },
    view3: {
        borderWidth: 1,
        borderColor: 'black', backgroundColor: 'green',
        height: 100,
        width: 100
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red'

    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0

    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
    }
})

/// export
export default BoxScreen