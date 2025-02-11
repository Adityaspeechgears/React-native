import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { FlatList } from 'react-native-gesture-handler'
// import slider 

const slide = () => {
  const[currentIndex,setcurrentIndex]=useState(0)

  
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <FlatList
        horizontal
        onScroll={e=>{
          const X=e.nativeEvent.contentOffset.x;
          console.log((X/Dimensions.get('window').width).toFixed(0))
          setcurrentIndex((X/Dimensions.get('window').width).toFixed(0))
        }}
        data={[
            require(''),
        ]}
        renderItem={({item,index})=>{
            return (  
                <Slider image={item} index ={index} currentIndex={currentIndex}/>
            )
        }}
        />
    </View>
  )
}

export default slide

const styles = StyleSheet.create({})