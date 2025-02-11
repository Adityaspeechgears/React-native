import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = (navigation) => {
  useEffect(()=>{
    setTimeout(()=>{
      NavigationContainer.navigate('Parent');
    },2000);
  },[]);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({}) 