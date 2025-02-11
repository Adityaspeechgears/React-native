import { StyleSheet,Dimensions, View } from 'react-native'
import React ,{useEffect}from 'react'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const SliderItem = ({image,index,currentIndex}) => {
  const animation=useSharedValue(0)
    useEffect(()=>{
      animation.value=currentIndex;
    },[currentIndex])
    const animatedStyle=useAnimatedStyle(()=>{
      return{
        transform:[{scale:animation.value==index?withSpring(1):withSpring(.5)},

        ],
    };
    });
  return (
    < Animated.View style={[{width:Dimension.get('window').width-40,height:Dimensions.get('window').height,
      justifyContent:'center',
      alignItems:'center',
    },animatedStyle]}>
     <Image source={image} style={{width:'70%',height:'70%'}}/>
    </Animated.View>
  )
}

export default SliderItem

const styles = StyleSheet.create({})