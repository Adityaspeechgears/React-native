import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItem from './AllItem';
import CreateScreen from './CreateScreen';

// const data =[
//   {id:1,name:"wheat",stock:5,unit:"kg"},
//   {id:2,name:"rice",stock:15,unit:"kg"},
//   {id:3,name:" Pasta",stock:5,unit:"kg"},
//   {id:4,name:"cereal",stock:5,unit:"kg"},
//   {id:5,name:"qoats",stock:35,unit:"kg"},
//   {id:6,name:" granola",stock:35,unit:"kg"},
//   {id:7,name:"butter",stock:5,unit:"kg"},
//   {id:8,name:"milk",stock:5,unit:"kg"},
 
// ]

const HomeScreen = () => {
const [view, setview]=useState(0)
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Dashbord</Text>
    <View style={styles.buttonContainer}>
        <Pressable style={[styles.button,view === 0 ? {backgroundColor:"#7237AFF"} : null ]} onPress={()=>setview(0)}>
            <Text style={[styles.btnText,view === 0 ? {Color:"white"} : null]}
            >All Items</Text>
        </Pressable>
        
        <Pressable style={[styles.button,view === 1? {backgroundColor:"#7237AFF"} : null ]}onPress={()=>setview(1)}>
            <Text style={[styles.btnText,view === 1 ? {Color:"white"} : null]}
            >Low Stock</Text>
        </Pressable> 
        
        <Pressable style={[styles.button,view === 2 ? {backgroundColor:"#7237AFF"} : null ]}onPress={()=>setview(2)}>
            <Text style={[styles.btnText,view === 2 ? {Color:"white"} : null]}
            >Create</Text>
        </Pressable>
        </View>
    {view === 0 && <AllItem data={data}/>}
    {view === 1 && <AllItem data={data.filter((item)=> item=>item.stock<20)}/>}
    {view === 2 && <CreateScreen/>}
  </View>
 

  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
              width:"100%",
              height:"100%",
              padding:"4%",
              backgroundColor:"#ffffff"
          },
          title:{
            fontSize:24,
            fontWeight:"bold",
            color:"#333"
          },
          buttonContainer:{
            flexDirection:"row",
            gap:10,
            marginVertical:10
          },
          button:{
            paddingVertical:3.5,
            paddingHorizontal:10,
            borderRadius:50,
            borderWidth:0.8,
            borderColor:"#7237AFF"
          },
          btnText:{
            color:"#7237AFF",
            fontSize:12
          }
            
})