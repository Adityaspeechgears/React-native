import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { transformer } from '../../metro.config'

const Button = () => {
const animation=useSharedValue(0)
const[isDay,setDay]=useState(true)
const animationStyle=useAnimatedStylet(()=>{
    return{
     transform:[{translateX:animation.value}]
    }
})

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity
         style={{
            width:150,height:50,borderRadius:30,borderWidth:1,flexDirection:'row',
            alignItems:'center',paddingLeft:5,paddingRight:5,backgroundColor:isDay?'white':'black'  
        }} onPress={()=>{
            if(animation.value==0){
                animation.value=withTiming(120,{duration:150})
                setIsDay(false)
            }else{
                animation.value=withTiming(0,{duration:150})
                setIsDay(true)
  
            }
        }}>
  <Animated.View style={[{
    width:40,height:40,borderRadius:20
  },animatedStyle]}>
    <Image
    //  source={animation.value==0?require(''):require('')}
    source={isDay?require(''):require('')}
     style={{width:'100%',height:'100%'}}
    /> 
     </Animated.View>
        </TouchableOpacity>
    </View>  
  )
}

export default Button

const styles = StyleSheet.create({})