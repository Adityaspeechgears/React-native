// Gesturehandler + reanimated Both Used 

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { PanGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture'

const Gesturehandler = () => {
    const x=useSharedValue(0);
    const y=useSharedValue(0);

const Gesturehandler = useAnimatedScrollHandler({
    onStart:(e,c)=>{
    c.startX=x.value;
    c.starty=y.value;
    },
    onActive:(e,c)=>{
      x.value=c.startX+e.translationX;
      y.value=c.starty=c.startY+e.translationY;

    },
    onEnd:(e,c)=>{
        // x.value=0;
        // y.value=0;
        x.value=withTiming(0,{duration:1000});
        y.value=withTiming(0,{duration:1000});
    }                  
});
    const animatedStyle=useAnimatedStyle(()=>{
        return{
            transform:[{translationX:x.value},{translateY:y.value}],  
        }

});    
  return (
    <GestureHandlerRootView style={{flex:1}}> 
    <View style={{flex:1}}>
    <PanGestureHandler onGestureEvent={Gesturehandler}>
    <Animated.View style={[{width:100,height:100,backgroundColor:'orange'}]}>
    </Animated.View>
        </PanGestureHandler> 
        </View>  
    </GestureHandlerRootView>
  )
}

export default Gesturehandler

const styles = StyleSheet.create({})