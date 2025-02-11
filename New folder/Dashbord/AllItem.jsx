import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItem = () => {
  return (
    <View>
        <View style={styles.headingContainer}>
        <Text style={styles.btn}>AllItem</Text>
        <Text style={styles.btn}>Quantity</Text>
        <Text>AllItem</Text>
        </View>
        <FlatList
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <View style={[styles.itemContainer,{backgroundColor:item.stock<20 ? "#FFCCCC":"#D7F6BFFF"}]}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.stock}</Text>
        <Text>AllItem</Text>
        </View>
        )}
        contentContainerStyle={{gap}}
        />
    </View>
  )
}

export default AllItem

const styles = StyleSheet.create({
  headingContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:10
  },
  headingText:{
    fontWeight:"500",
    fontSize:16
  },
itemContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7
},
itemText:
{
fontWeight:"400",
fontSize:14
},
})