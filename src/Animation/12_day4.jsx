import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { AnimatedView } from 'react-native-reanimated/lib/typescript/component/View'

const App = () => {
  const[count,setcount]=useState(0)
  const animatedY =useSharedValue(0)
  const animateX=useSharedValue(0)
  const scale =useSharedValue(0);
  const[btnClicked,setBtnClicked]=useState(false);
  const scale2=useAnimatedStyle=useAnimatedStyle(1)
  const animatedStyle=useAnimatedStyle(()=>{
    return{
      transform:[{translateX:animateX.value},{translateY:animatedY.value},
        {scale:scale2.value}
      ],
    };
  });
  const animatedStyle2=useAnimatedStyle(()=>{
    return{
      transform:[{translateX:animateX.value},{translateY:animatedY.value},
        {scale:scale.value}
      ],
    };
  });
      return (  
    <View style={{ flex: 1 }}>
      <Image
        source={require()}
        style={{ width: '100', height: 300 }}
      />
      <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 10, marginLeft: 10 }}>
        Formal Shoes </Text>
        <Text
        style={{
          width:'94%',
          alignSelf:'center',
          marginTop:10,
          fontSize:16,
        }}
        >Formal shoes prioritize elegance with sleek lines & simple designs meant to dazzle! Men often wear brogues or oxfords while women might wear pumps or heels. The design emphasizes matching well with formal outfits for a polished and uniform appearance. </Text>
        <Animated.View style={[{
          width:30,
          height:30,
          borderRadius:15,
          backgroundColor:'red',
          justifyContent:'center',
          alignItems:'center',
          alignSelf:'center'

        },animatedStyle,]}>
          <Text style={{color:'white',fontSize:16}}>{'+1'}</Text>
        </Animated.View>
      <TouchableOpacity 
        disabled={btnClicked}
      style={{
        width:'90',
        height:50,
        backgroundColor:'blue',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:10
      }} onPress={()=>{
         if(animateX.value==0){
          setBtnClicked(true)
          scale.value=1;
          animateX.value=withTiming(150,{duration:1500});
          animateX.value=withTiming(-530,{duration:1500});
          setTimeout(()=>{
            scale.value=0;
            scale2.value=withTiming(1.5);
            setcount(count+1)
          animateX.value=withTiming(0,{duration:1500});
          animateX.value=withTiming(0,{duration:1500});
          setTimeout(()=>{
            scale2.value=withTiming(1);
            setBtnClicked(false)
          },150);
          },1500);
         }

    }}
      >
        <Text style={{color:'white'}}>Add To Cart </Text>
      </TouchableOpacity>
      <View 
      style={{
        width:60,
        height:60,
        backgroundColor:'white',
        borderBlockColor:30,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:10,
        right:10,
        borderRadius:30,
        backgroundColor:'white'

      }}>
        <Image source={require('')} style={{
          width:30,
          height:30,
          backgroundColor:'red',
          borderRadius:15,
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          top:10,
          right:10
        }}/>
        <Animated.View
        style={[{
          width:30,
          height:30,
          backgroundColor:'red',
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          top:0,
          right:0,
          borderRadius:15,},animatedStyle2]}
        >
          <Text style={{color:'white',fontSize:16}}>{count}</Text>
        </Animated.View>
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})














