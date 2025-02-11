
// How to Used Animated Style 
// Square view to Circle View 


import {  Text, View,Touchable } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';

const App = () => {
  // const animatedValue=useSharedValue(100)
  const h=useSharedValue(100)
  const w=useSharedValue(100)
  const r=useSharedValue(0)
  const animatedStyle=useAnimatedStyle(()=>{
    return{
      width:w.value,
      height:he.value,
      borderRadius:r.value,
      opacity:w.value==100?1:.5,
      transform:[{translateX:-h.value},{translateX:w.value}]
    };
  });
 return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Animated.View style={{

          width:animatedValue,

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
            if(w.value==100){
              // h.value=withSpring(200)
              // w.value=withSpring(200)
              // r.value=withSpring(100)
              h.value=withDelay(2000,withSpring(200));
              w.value=withDelay(2000,withSpring(200));
              r.value=withDelay(2000,withSpring(100));


            }else{
            //   h.value=withSpring(100)
            //   w.value=withSpring(100)
            //   r.value=withSpring(0)
            h.value=withDelay(2000,withSpring(100));
            w.value=withDelay(2000,withSpring(100));
            r.value=withDelay(2000,withSpring(0));
            }

           }}>  
             </TouchableOpacity>
            <Text style={{color:'white'}}>Scale View</Text>

    </View>
  )
}

export default App
