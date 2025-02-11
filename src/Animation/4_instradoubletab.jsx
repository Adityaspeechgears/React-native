// intragram double tab 
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { GestureHandlerRootView, TapGestureHandle } from 'react-native-gesture-handler'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import { useSharedValue, withDecay, withDelay, withSpring } from 'react-native-reanimated';
const ImageComponent = Animated.createAnimatedComponent(Image);

const InstragramAnimation= () => {
    const scale =useSharedValue(0);
    const doubleTab=useCallback(()=> {
        scale.value = withSpring(1,undefined,isFinished =>{
            if(isFinished){
                scale.value=withDelay(100,withSpring(0));
            }
        }); 
    },[]);
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{scale:Math.max(scale.value,0)}], 
        };
    });
  return (

    <GestureHandlerRootView style={{flex:1}}> 
       <View style={{flex:1,justisfyContent:'center',aligmentItems:'center'}}>                         
    <TapGestureHandler onActivated={doubleTab}>  
    <Animated.View>
      <ImageBackground
      source={require('')}
      style={{width:Dimensions.get('window').width,
        height:Dimensions.get('window').width,
      }}>
        <ImageComponent
        source={require('')}
        style={[{
            width:100,height:100,tintColor:'white',
        }]}
        />
        </ImageBackground>
    </Animated.View>
    </TapGestureHandler>
    </View>
</GestureHandlerRootView>
    
  )
}

export default InstragramAnimation;

const styles = StyleSheet.create({})