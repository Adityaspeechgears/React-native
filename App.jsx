import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { transform } from './metro.config'
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity)
const App = () => {
  // for changing color 

  const[color1,setcolor1]=useState('black')
  const[color2,setcolor2]=useState('black')
  const[color3,setcolor3]=useState('black')

  const [selectedTab, setSelectTab] = useState(0)
  const animatedX = useSharedValue(0)
  const animated = useSharedValue(0)
  //for button

  const animatedBtn1Y = useSharedValue(0)
  const animatedBtn2Y = useSharedValue(0)
  const animatedBtn3Y = useSharedValue(0)

  useEffect(() => {
    if (selectedTab == 0) {
       setcolor2('black')
       setcolor3('black')
      animatedY.value = withTiming(50, { duration: 500 });
      setTimeout(() => {
        animatedX.value = withTiming(0, { duration: 500 });
      }, 500)
      setTimeout(() => {
        animatedBtn1Y.value = withTiming(-150, { duration: 500 });
        animatedY.value = withDelay(100,withTiming(-100, { duration: 500 }));
        setTimeout(() => {
          animatedY.value = withTiming(0, { duration: 500 });
          animatedBtn1Y.value = withTiming( 0, { duration: 500 });
          // setcolor1('white')
          setTimeout(()=>{
            setcolor1('white')
 
         },500)
        }, 500)
      }, 1000) 
    } else if
      (selectedTab == 1) {
        setcolor2('black')
        setcolor3('black')
      animatedY.value = withTiming(50, { duration: 500 });
      setTimeout(() => {
        animatedX.value = withTiming(100, { duration: 500 })
      }, 500)
      setTimeout(() => {
        animatedBtn2Y.value = withTiming(-150, { duration: 500 });
        animatedY.value = withDelay(100,withTiming(-100, { duration: 500 }));

        setTimeout(() => {
          animatedY.value = withTiming(0, { duration: 500 });
          animatedBtn2Y.value = withTiming( 0, { duration: 500 });
          // setcolor1('white')
          setTimeout(()=>{
            setcolor2('white')
 
         },500)

        }, 500) 
      }, 1000)
    } else {
      setcolor1('black')
      setcolor2('black')
      animatedY.value = withTiming(50, { duration: 500 });
      setTimeout(() => { 
        animatedX.value = withTiming(200, { duration: 500 });
      }, 500)
      setTimeout(() => {
        animatedBtn3Y.value = withTiming(-150, { duration: 500 });
        animatedY.value=withDelay(100,withTiming(-100, { duration: 500 }));

        setTimeout(() => {
          animatedY.value = withTiming(0, { duration: 500 });
          animatedBtn3Y.value = withTiming(0, { duration: 500 });
          // setcolor3('white')
          setTimeout(()=>{
           setcolor3('white')

        },500)

        }, 500)
      }, 1000)
    }
  }, [selectedTab])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedX.value }, { translateY: animatedY.value }],
    };
  });
  const animatedBtnStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedBtn1Y.value }],
    };
  });

  const animatedBtnStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedBtn2Y.value }],
    };
  });
  const animatedBtnStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedBtn3Y.value }],
    };
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 70,
        elevation: 5,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        justisContent: 'space-evenly'
      }}>
        <Animated.View style={[{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: 'orange',
          position: 'absolute',
        }, animatedStyle]}></Animated.View>

        <AnimatedBtn style={[{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'
        },animatedBtnStyle1]}
          onPress={() => {
            setSelectTab(0);
          }}
        >
          <Image
            source={require('')}
            style={{
              width: 30, height: 30,tintColor:color1
            }}
          />
        </AnimatedBtn>

        <AnimatedBtn style={[{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'
        },animatedBtnStyle2]}
          onPress={() => {
            setSelectTab(1);
          }}>
          <Image
            source={require('')}
            style={{
              width: 30, height: 30,tintColor:color2
            }}
          />
        </AnimatedBtn>
        <AnimatedBtn style={[{
          width: 60, 
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'
        },animatedBtnStyle3]}
          onPress={() => {
            setSelectTab(2);
          }}>
          <Image
            source={require('')}
            style={{
              width: 30, height: 30
            }}
          />
        </AnimatedBtn>


      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})