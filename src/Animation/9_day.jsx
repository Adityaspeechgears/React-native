// Day-Day Playlist

// How to Used share Value  and Pass Value 

import {  Text, View,Touchable } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const App = () => {
  const animatedValue=useSharedValue(100) //number,string,boolean,array,object
 return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Animated.View style={{
            // width:100,
            // Har baar  width increse ho 
            width:animatedValue,
          // height:100,
          height:animatedValue,

          backgroundColor:'red'

          }}>
          </Animated.View>
          <TouchableOpacity
           style={{
          borderWidth:1,
          width:'90',
          height:'50',
          backgroundColor:'black',
          justifyContent:'center',
          alignContent:'center',
          marginTop:'200',
        }}  
           onPress={()=>{
            // Har baar press pe increse ho 
            // animatedValue.value=animatedValue.value+50 
            // animatedValue.value=withSpring(animatedValue.value+50);
            animatedValue.value=withTiming(animatedValue.value+50,{duration:2000});


           }}>  
             </TouchableOpacity>
            <Text style={{color:'white'}}>Scale View</Text>

    </View>
  )
}

export default App

// View ,Flatlist,Image,Text,scrollview
// crustom component using createAnimatedComponent
// Shared value
// animated function

const styles = StyleSheet.create({})