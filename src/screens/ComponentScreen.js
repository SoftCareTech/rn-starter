//imports
import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

//component
const ComponentScreen = ()=>{ 
    const myName=<Text style={style.textStyleBody} >My name is Gbenge Aondoakula Raphael</Text>   
return (<View>
 <Text style={style.textStyleSubHead} >Gettind started with React Native!</Text>
 {myName}
    </View>)
}

// styles 
const style = StyleSheet.create({
    textStylesubHead:{
        fontSize:45
    },
    textStyleBody:{
        fontSize:20
    },
})

/// export
export default ComponentScreen