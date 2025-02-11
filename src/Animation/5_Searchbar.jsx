import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import { useSharedValue } from 'react-native-reanimated';

const Searchbar = () => {
    const animation =useSharedValue(0);
    const[value,setValue]=useSharedValue(0);
    const animatedStyle=useAnimatedStyle(()=>{
        return{
            width:animation.value==1?
            withTiming(300,{duration:500})
            :withTiming(0,{duration:500}),

        }
    })
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Animated.View style={[{
      width:300,
      height:300,
      backgroundColor:'#E7E7E7',
      borderRadius:10,
      flexDirection:'row',
      alignItems:'center',
    }]}>
      <TextInput style={{width:'85'}} placeholder={'Search here..'}/>
      <TouchableOpacity 
      onPress={()=>{
        if(animation.value == 1) {
            animation.value=0;
            setValue(0);

        }else{
            animation.value=1;
            setValue(1);
        }
      }}>
    <Image
            source={
                // animation.value ==1
                value==1
                ? require('')
                : require('')
            }
            // style={{width:30,height:30}}
            style={{width:value==1 ? 20:30,height: value==1 ? 20:30}}

          />
          </TouchableOpacity>
      </Animated.View>
    </View>
  
 );
 };

export default Searchbar;

const styles = StyleSheet.create({})