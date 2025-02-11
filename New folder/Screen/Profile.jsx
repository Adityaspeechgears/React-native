// import { StyleSheet, Text,Button,View } from 'react-native'
// import React from 'react'

// const Profile = ({navigation})=> {


//    return (
//     <View style={{width:"100%",height:"100%",justifyContent:"center",alignContent:'center'}}>
      
//       <Text style={{fontSize:20,fontWeight:"500",marginBottom:10}}>Profile</Text>

//     <Button title="Search" onPress={()=> navigation.navigate("Search")}/>     
//     </View>
//   )
// }

// export default Profile



// import { StyleSheet, Text,Button,View } from 'react-native'
// import React from 'react'
  
// const Profile = (navigation,route) => {
//   console.log(route.params)

// // Destructuring for showing data 

//   const {id,name}= route.params

//    return (
//     <View style ={styles.container}>

//       <Text style={styles.text}>Profile</Text>
//       <Text style={styles.text}></Text>

//        <Text style={styles.text}>id:{id},Name :{name}</Text> 
  
//     <Button title="Search" onPress={()=> navigation.navigate("Search")}/>     
//     </View>
//   )
// }

// export default Profile

//  const styles = StyleSheet.create({
//    container:{
//      width:"100",
//      height:"100%",
//      justifyContent:"center",
//      alignItems:"center"
//   },
//    text:{
//      fontSize:20,
//      fontWeight:"500",
//      marginBottom:10
//     }
//  })


// Tab 

import { StyleSheet, Text,Button,View } from 'react-native'
import React from 'react'

const Profile = ({navigation})=> {


   return (
    <View style={{width:"100%",height:"100%",justifyContent:"center",alignContent:'center'}}>
      
      <Text style={{fontSize:20,fontWeight:"500",marginBottom:10}}>Profile</Text>

    <Button title="Search" onPress={()=> navigation.navigate("Search")}/>     
    </View>
  )
}

export default Profile

