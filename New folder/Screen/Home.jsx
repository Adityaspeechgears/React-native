// import { View, Text,StyleSheet,Button } from 'react-native'
// import React from 'react'
// import Profile from './Profile'

// const Home = ({navigation}) => {
//   return (
//     <View style={{width:"100%",height:"100%",justifyContent:"center",alignContent:'center'}}>
//       <Text style={{fontSize:20,fontWeight:"500",marginBottom:10}}>Home</Text>
//       <Button title="Profile"onPress={()=> navigation.navigate("Profile")}/> 
 
//     </View>
//   )
// }

// export default Home
// const styles = StyleSheet.create({})


// import { View, Text,StyleSheet,Button } from 'react-native'
// import React from 'react'
// import Profile from './Profile'

// const Home = ({navigation}) => {
//   return (
//     <View style={{width:"100%",height:"100%",justifyContent:"center",alignContent:'center'}}>
//       <Text style={{fontSize:20,fontWeight:"500",marginBottom:10}}>Home</Text>
//       <Button title="Profile"
//       // screen ke bich main deta bhejna ho to  
//       onPress={()=> navigation.navigate("Profile", {id:1,name:"Lolu"})}/>
//             {/* onPress={()=> navigation.navigate("Profile")}/> */}
 
//     </View>
//   )
// }

// export default Home
// const styles = StyleSheet.create({})


// Tab

import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Home = ({navigation}) => {
  return (
    <View style={{width:"100%",height:"100%",justifyContent:"center",alignContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:"500",marginBottom:10}}>Home</Text>
      <Button title="Profile"
            onPress={()=> navigation.navigate("Profile")}/> 
    </View>
  )
}

export default Home
const styles = StyleSheet.create({})

