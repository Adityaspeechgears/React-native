import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, PanGestureHandler } from 'react-native-gesture-handler'
import { PanGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture';
import { AnimatedView } from 'react-native-reanimated/lib/typescript/component/View';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const SwipeasGmail = () => {
  const animation=useSharedValue(0);
  const gestureHandler=useAnimatGestureHandler({
    onStart:(event,ctx)=>{
      ctx.startX=animation.value;
    },
    onActive:(event,ctx)=>{
   animation.value=ctx.startX + event.translationX;
    },
    onend:(event,ctx)=>{
    animation.value=withSpring(0);
    },
  });
  const animatedStyle=useAnimatedStyle(()=>{ 
    return{
      transform:[{translateX:animation.value}],
    };
  });
  const animationIconRight= useAnimatedStyle(()=>{
    return {
      transform:[
        {scale:animation.value>-105? withSpring(2) :withSpring(1)},
      ],
    };
  });

  const animationIconLeft = useAnimatedStyle(()=>{
    return {
      transform:[
        {scale:animation.value> 70 ? withSpring(2) :withSpring(1)},
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{flex:1}}> 
      <View 
      style={{flex:1,justisfyContent:'center',aligmentItems:'center'
      }}>  
    <PanGestureHandler onGestureEvent={gestureHandler} >
    <AnimatedView
    style={{
      backgroundColor:'green',
      width:'100%',
      height:100 ,
      elevation:5,
      flexDirection:'row',
      aligmentItems:'center',
      justifyContent:'space-between',

    }}>
       <AnimatedView style={[{width:14,height:14,marginLeft:20},animatedIconLeft,]}>
        <Image
        source={require('')}
        style={{width:'100%',height:'100%',tintColor:'white'}}
        />
       </AnimatedView >
       <AnimatedView  style={[{width:14,height:14,marginRight:20},animationIconRight,]}>
        <Image
        source={require('')}
        style={{width:'100%',height:'100%',tintColor:'white'}}
        />
       </AnimatedView >
    <AnimatedView
    style={[{
      backgroundColor:'white',
      width:'100%',
      height:'100%',
      position:'absolute',
      borderRadius:10,
      flexDirection:'row',
      alignItems:'center',
    },animatedStyle,
    ]}>
      <View  style={{  
      backgroundColor:'purple',
      width:50,
      height:50,
      borderRadius:'25',
      margin:'left',
      justifyContent:'center',
      alignItems:'center',
      }}>
        <Text style={{color:'white',fontSize:30,fontWeight:'600'}}></Text>
      </View>
      <View style={{margin:'left'}}>
        <Text style={{fontSize:20,fontWeight:'700',color:'black'}}></Text>
        <Text></Text>

      </View>
    </AnimatedView>
    </AnimatedView>
    </PanGestureHandler>
    </View>
</GestureHandlerRootView>

  );
};

export default SwipeasGmail

const styles = StyleSheet.create({})