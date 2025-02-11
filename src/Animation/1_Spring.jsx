// 25 Video Playlist
// create a View and Increase Size after Press 
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const App = () => {
  const animation =useSharedValue(1);
  const [clicked,setClicked]=useState(false)
  const animatedStyle=useAnimatedStyle(()=>{
    return{transform:[
      // {translateX:animation.value}
          // Rotation Used
    //  {rotate:`${animation.value}deg`}
    {scale:animation.value}


    ]};
  });
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Animated.View style={[{width:100,height:100,backgroundColor:'red'},
        animatedStyle
      ]}>
      </Animated.View>

      <TouchableOpacity style={{borderWidth:1,width:'90',height:'50',backgroundColor:'black',justifyContent:'center',alignContent:'center',marginTop:'200'}}
       onPress={()=>{
      //  animation.value=-200;  
      // animation.value=withSpring(100);  
      if (clicked){
        // animationvalue=withSpring(100);
        // Timing & Rotation 
//        animationvalue=withTiming(100,{duration:300});
        // scaling 
        animationvalue=withSpring(1,{});
        }
        else {
          // animation.value=withSpring(-100)
          // animationvalue=withTiming(-100,{duration:300});
          animationvalue=withSpring(0.5,{});

        }
        setClicked(!clicked)
      }}>   
      <Text>Start Animation </Text>
      </TouchableOpacity>
    </View>
  )
}

export default App