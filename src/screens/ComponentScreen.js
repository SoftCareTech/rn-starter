//imports
import React from 'react'
import {Text, StyleSheet} from 'react-native'

//component
const ComponentScreen = ()=>{ 
    return<Text style={style.textStyle} > Component</Text>
}

// styles 
const style = StyleSheet.create({
 
    textStyle:{
        fontSize:30
    }
})

/// export
export default ComponentScreen