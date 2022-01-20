//imports
import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

//component
const ComponentScreen = ()=>{ 
    const myName= 'Gbenge Aondoakula Raphael'
return (<View>
 <Text style={style.textStyleSubHead} >Gettind started with React Native!</Text>
 <Text style={style.textStyleBody} >My name is {myName} </Text>   
    </View>)
}

// styles 
const style = StyleSheet.create({
    textStyleSubHead:{
        fontSize:45
    },
    textStyleBody:{
        fontSize:20
    },
})

/// export
export default ComponentScreen