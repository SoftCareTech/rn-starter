//imports
import React from 'react'
import { Text, FlatList, StyleSheet, View } from 'react-native'

//component
const ListScreen = () => { 

const friends=[
    {name:'Friend 1' ,age :65},
    {name:'Friend 2',age :15 },
    {name:'Friend 3' ,age :12} 
    ]
    
   return <FlatList 
    horizontal={false}
    showsHorizontalScrollIndicator={false}
       keyExtractor={(friend)=>friend.name}
           data ={friends}
            renderItem={({item })=>{ 
                return <Text 
                 style={style.textStyle}
                 >{item.name} -Age {item.age} </Text>
            }
        }
     />
}

// styles 
const style = StyleSheet.create({
    textStyle:{
        marginVertical:10
    }
})

/// export
export default ListScreen