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

 
    
   return <FlatList 
       
           data ={friends}
            renderItem={({item })=>{ 
                return <Text>{item.name} </Text>
            }
        }
     />
}

// styles 
const style = StyleSheet.create({
})

/// export
export default ListScreen