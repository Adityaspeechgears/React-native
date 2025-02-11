
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';

const App = () => {
    const [switchValue,setswitchValue]=useState(false);
    const ToggleSwitch=(value)=>{
        setswitchValue(value);
    }
        
  return (
    
      <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>  
        <Text style={styles.text}>
            {switchValue ? 'Switch is ON' :'Switch is OFF'}
        </Text>
        <Switch 
        style={{marginTop:40}}
        onValueChange={ToggleSwitch}
        value={switchValue}
        />

        </View>
      </SafeAreaView>
  )
}

export default App;

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontySize:30,
        fontWeight:'bold'
    }
})
