import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrowerNavigator from './Drower/DrowerNavigator'

const Parent = () => {
  return (
    <View style={{flex:1}}>
  <DrowerNavigator/>
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({})