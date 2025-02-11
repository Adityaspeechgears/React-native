// Video-2 
// create a view and convert Square to Circle after Press

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'


const App = () => {
const animation =useSharedValue(1);

// const animatedStyle=useAnimatedStyle(()=>{
  const [clicked,setClicked]=useState(false)
  const animatedStyle=useAnimatedStyle(()=>{
     const width =interpolate(animation.value,[1,0],[100,200]);
     const backgroundColor=interpolateColor(animation.value,[1,0],['black','red'])
     const borderRadius=interpolate(animation.value,[1,0],[0,100]);
     return{
        // width:animation.value==1? 100:200,
        // height:animation.value==1? 100:200,
          width:width,
          height:height,
          backgroundColor,
          borderRadius,
      };
    });

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Animated.View style={[{width:100,height:100,backgroundColor:'red'},
          animatedStyle,
          ]}>
          </Animated.View>
          <TouchableOpacity
           style={{borderWidth:1,width:'90',height:'50',backgroundColor:'black',justifyContent:'center',alignContent:'center',marginTop:'200'}}  
           onPress={()=>{
            // animation.value=0;
                  if (clicked){
                    // animation.value=withSpring(1);
                       animationvalue=withTiming(1,{duration:1000});

                    }
                    else {
                      // animationvalue=withSpring(0);
                      animationvalue=withTiming(0,{duration:1000});

            
                    }
                    setClicked(!clicked)
           }}> </TouchableOpacity>
            <Text>Start Animation</Text>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})