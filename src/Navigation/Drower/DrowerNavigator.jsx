// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerContainer } from '@react-navigation/Drower'


// const Drawer = createDrawerNavigator();
// const DrowerNavigator = () => {

//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home}
//       options={{headerShown:true}}
//       // options={{headerShown:false}} 
//       />
//       <Drawer.Screen name="Profile" component={ProfileScreen} 
//       />
//       <Drawer.Screen name="Profile" component={ProfileScreen} 
//       />
//     </Drawer.Navigator>

//   )
// }

// export default DrowerNavigator

// const styles = StyleSheet.create({})


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

const AboutScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>About Screen</Text>
  </View>
);

// Define the Help Screen
const HelpScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Help Screen</Text>
  </View>
);

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
