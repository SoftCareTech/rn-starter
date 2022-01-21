//imports
import React from 'react'
import { Text, FlatList, StyleSheet, View } from 'react-native'

//component
const ListScreen = () => {
const friends=[
{name:'Friend 1', key:'1'},
{name:'Friend 2',key:'2'},
{name:'Friend 3',key:'3'}

]

const friends2=[
    {name:'Friend 1' },
    {name:'Friend 2' },
    {name:'Friend 3' }
    
    ]
    
   return <FlatList 
    horizontal={true}
    showsHorizontalScrollIndicator={false}
       keyExtractor={(friend)=>friend.name}
           data ={friends2}
            renderItem={({item })=>{ 
                return <Text 
                 style={style.textStyle}
                 >{item.name} </Text>
            }
        }
     />
}

// styles 
const style = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
})

/// export
export default ListScreen