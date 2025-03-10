import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/native-stack'
import Parent from './Parent'
import Splash from './Splash'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown:false}}
            />
            <Stack.Screen
             name="Parent"
             component={Parent}
             options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})