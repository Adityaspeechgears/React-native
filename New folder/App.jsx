

// import { View, Text,Image, Button, Touchable, TouchableOpacity, Alert,TouchableHighlight, Pressable, SafeAreaView, StyleSheet } from 'react-native'
// import React from 'react'

// const App = () => {
//   // 2 Method for CSS( JS OBJECT METHOD )
//   const style = {
//     container: {
//       width:"100%",
//       height:"100%",
//       backgroundColor:"purple"
//     }
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Hello</Text>

//     {/* <SafeAreaView style={{width:"100%",height:"100%",backgroundColor:"red"}} >
//       <Text style ={{color:"white",fontSize:20,fontWeight:"bold"}}> Hi Aditya </Text> */}
// <Image 
// // First Methoid (inline CSS)
// style={{width:200,height:300}}
// source={{uri:"data:image/jpeg;base64,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"}}>
// </Image>
//  {/*  Three way to Used Button  */}
 
// {/* 1 <Button title ='Press me'></Button> */}


// {/*2  <TouchableOpacity  */}
// {/* 
// <TouchableHighlight
// style={{padding:10,backgroundColor:"green"}} onPress={()=> Alert.alert("Pressed !!")}>
//   <Text>  
//   Button 
//   </Text>
//   </TouchableHighlight> */}

//   {/* </TouchableOpacity> */}
  
//  {/*  Third Method and Used This Method  */}
//   {/* <Pressable style={{padding:10,backgroundColor:"blue"}}> */}

//  <Pressable style={styles.button}>
//     <Text style={styles.btnText}> Press Me </Text>
    
//   </Pressable>
//     </SafeAreaView>

//   )
// }

// export default App

// // Third Method for CSS Providing by React-Native 

// const styles =StyleSheet.create({
//   container:{
//     width:"100%",  
//     height:"100%",
//     backgroundColor:"#ffffff",
//     padding:20,
//     gap:10
//   },
//   Text:{
//     color:"black",
//     fontSize:20,
//     fontWeight:"bold",
//   },
//    button:{
//     width:120,
//     padding:10,
//     // paddingHorizontal:7,
//     // paddingVertical:7,
//     backgroundColor:"#666",
//       justifyContent:"center",
//     alignItems:"center",
//     borderRadius:50,
//     marginTop:10,
//     borderWidth:6,
//     // borderColor:"red"
//    },
//    btnText:{ 
//     color:"white",
//     fontWeight:"400",
//     fontSize:16
//    }
// })


// // part -2 
// import { View, Text,StyleSheet, useColorScheme } from 'react-native'
// import React from 'react'

// const App = () => {
//   const theme =useColorScheme()
//   // console.log(theme,"theme")
//   const isDarkMode = theme === 'dark';
//   const backgroundColor = isDarkMode ? "black":"white";
//   const textColor = isDarkMode ? "white" :"black"
//   return (
//   <View styles={styles.container}>
//   <Text style={[styles.text, {color: textColor}]}>App</Text>
//   </View>
//   )
// }
// export default App

// const styles =StyleSheet.create({
//   container:{
//    flex:1,
//    justifyContent:"center",
//    alignItems:"center",
//   },
//  text:{
//   fontSize:20,
//   fontWeight:"bold",
//   color:"white"
//  }
// })

// // Part -
// // Percenrtage used 

// // import { StyleSheet,Text,View } from "react-native";
// // import React from "react";

// // const App = ()=> {
// //   return (
// //     <View style={styles.container} >
// //       <View style ={{width:"50%",height:200,backgroundColor:"red"}}></View>
// //     </View>

// //   )
// // }
// // export default App

// // const styles =StyleSheet.create({
// //   container:{
// //     width:"100%",
// //     height:"100%",
// //     backgroundColor:"#dadada"
// //   }
// // })

// // Part-4 
// // Flex
// //     <ScrollView = List ko render karwane ke liye
//  km data (10-15)ke liye  

// import { ScrollView, StyleSheet,Text,View } from "react-native";
// import React from "react";

// const App = ()=> {
 
//   return(
//     // <View style={styles.container}>
    
//     <ScrollView
//     contentContainerStyle={{gap:10}}
//     horizontal  
//     style={styles.container} >
//       <View style={styles.box1}/>
//     <View style={styles.box2}/>
//     <View style={styles.box3}/>
//     <View style={styles.box4}/>
//     <View style={styles.box1}/>
//     <View style={styles.box2}/>
//     <View style={styles.box3}/>
//     <View style={styles.box4}/>
//     <View style={[styles.box2,{backgroundColor:"skyblue"}]}/>
//     <View style={[styles.box4,{backgroundColor:"pink"}]}/>
//     <View style={[styles.box3,{backgroundColor:"purple"}]}/>
//     <View style={[styles.box1,{backgroundColor:"skyblue"}]}/>


//       {/* <Text>App</Text> */} 
//     {/* </View> */}
//     </ScrollView>
//   )
// }
// export default App
// const styles = StyleSheet.create({
//    container:{
//     flex:1,
//     backgroundColor:"black",
//     // flexDirection:"row-reverse",
//     // flexDirection:"column-reverse",
//     // flexDirection:"column",// main-axis 
//     // justifyContent:"center",
//     // justifyContent:"space-evenly"
//     // alignItems:"center" , // ye wraping ke sath kaam nhi krta hai 
//     // flexWrap:"wrap",
//     // alignContent:"flex-end"
//     padding:10
//    },
//    box1:{
//     // flex:1,
//     height:80,
//     width:80,
//     // alignSelf:"flex-end",
//     backgroundColor:"red",
//     borderRadius:50
//    },
//    box2:{ 
//     // flex:2,
//     height:80,
//     width:80,
//     backgroundColor:"purple",
//     // flexGrow:1 // flex1 both used in same 
//     borderRadius:50

//    },
//    box3:{
//     // flex:1,
//     height:80,
//     width:80,
//     backgroundColor:"green",
//     borderRadius:50

//    },
//    box4:{
//     // flex:1,
//     height:80,
//     width:80,
//     borderRadius:50
// ,
//     backgroundColor:"yellow"
//    }
//   })

// Partr-5
// FlatLIST= List ko render karwane ke liye 
// Data size bada hai than used Flatlist because it give better perfornce  

// import { FlatList, Image, StyleSheet,Text,View } from "react-native";
// import React from "react";
// const dummy = [
// {id:1, name:"Muskan",email:"muskan123",image:"https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F414612%2Fpexels-photo-414612.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-souvenirpixels-414612.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&docid=B51x0PBR9KNzvM&tbnid=oXTudgfT3pqXSM&vet=12ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECDYQAA..i&w=5306&h=3770&hcb=2&itg=1&ved=2ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECDYQAA"},
// {id:2, name:"Ashiya",email:"muskan123",image:"https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimg-cdn.pixlr.com%2Fimage-generator%2Fhistory%2F65bb506dcb310754719cf81f%2Fede935de-1138-4f66-8ed7-44bd16efc709%2Fmedium.webp&imgrefurl=https%3A%2F%2Fpixlr.com%2Fimage-generator%2F&docid=6dhDHhJGcmvL6M&tbnid=B_ypq20yGKrazM&vet=12ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECEkQAA..i&w=500&h=500&hcb=2&itg=1&ved=2ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECEkQAA"},
// {id:3, name:"goli",email:"muskan123",image:"https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimg-cdn.pixlr.com%2Fimage-generator%2Fhistory%2F65bb506dcb310754719cf81f%2Fede935de-1138-4f66-8ed7-44bd16efc709%2Fmedium.webp&imgrefurl=https%3A%2F%2Fpixlr.com%2Fimage-generator%2F&docid=6dhDHhJGcmvL6M&tbnid=B_ypq20yGKrazM&vet=12ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECEkQAA..i&w=500&h=500&hcb=2&itg=1&ved=2ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECEkQAA"},
// {id:4, name:"Muskan",email:"muskan123",image:"https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fthemeisle.com%2Fblog%2Fwp-content%2Fuploads%2F2024%2F06%2FOnline-Image-Optimizer-Test-Image-PNG-Version.png&imgrefurl=https%3A%2F%2Fthemeisle.com%2Fblog%2Fbest-online-image-optimizer-tools%2F&docid=sjkLgx8QO06c5M&tbnid=0J1gCKEn3OPMUM&vet=12ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECG4QAA..i&w=1024&h=1024&hcb=2&ved=2ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECG4QAA"},
// {id:5, name:"aaru",email:"muskan123",image:"https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fmost-amazing-realistic-hd-8k-wallpaper-stock-photographic-image_915071-51074.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Fmost-amazing-realistic-hd-8k-wallpaper-stock-photographic-image_73031150.htm&docid=Td09ieENj4Uf3M&tbnid=0GsySiG2qUtr3M&vet=12ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECDQQAA..i&w=626&h=351&hcb=2&ved=2ahUKEwj_8aqexP6KAxWmcfUHHVrtC6AQM3oECDQQAA"}

// ]
// const App = () => {  
//   return (
//     <View style={styles.conatiner}>
//        {/*  SECOND PART */}
//         <FlatList
//         data={dummy}
//         renderItem={({item}) =>(
//           <View style={styles.card}> 
//          <Image
//         style={{width:40, height:40, borderRadius:50 }}
//         source={{url:"https://www.google.com/imgres?q=dv%20lottery%20card%20on%20passport%20size%20photo&imgurl=https%3A%2F%2Fpassport-photo.online%2Fblog%2Fwp-content%2Fuploads%2F2024%2F02%2Fgreen-card-photo-size.png&imgrefurl=https%3A%2F%2Fpassport-photo.online%2Fblog%2Fgreen-card-picture%2F&docid=YKOBrif08pM1aM&tbnid=GHlavRx2meDGUM&vet=12ahUKEwjd5LX9x_6KAxUWUGwGHaIMOacQM3oECHsQAA..i&w=2720&h=1364&hcb=2&ved=2ahUKEwjd5LX9x_6KAxUWUGwGHaIMOacQM3oECHsQAA"}}/>
//       <Text>Name</Text>
//       <Text>Email</Text>
//       </View> 

//         )} 
//       // Uniquly identify item            
//       keyExtractor={item=>item.id}
//       // Gap diyta 
//         ItemSeparatorComponent={<View style={{height:10}}/>} 
//         // card ko do column main liya 
//         numColumns={2}
//         // horizontal main show kiya  
//         // horizontal
//         // do card main distance diya 
//         columnWrapperStyle={{gap:10}}
//         // Data ko rerender krne ke liye jo show ho rha hai 
//         // extraData={But abhi koe aisi property hai nhi }
//          />
       
//       {/* <View style={styles.card}> */}
//         {/* <Image
//         style={{width:40,height:40,borderRadius:50}}
//         source={{url:"https://www.google.com/imgres?q=blank%20page&imgurl=https%3A%2F%2Fi.printerdoc.net%2FHP%2520LaserJet%25203030%2520All%2520in%2520One%2520Printer%2Fsl%2FHP%2520LaserJet%25203030%2520All%2520in%2520One%2520Printer_sl102.png&imgrefurl=https%3A%2F%2Fhp-laserjet-3030-all-in-one-printer.printerdoc.net%2Fsl%2Ftroubleshooting-8%2Fpages-print-but-are-totally-blank-3%2Fdoes-the-document-contain-blank-pages-3%2F&docid=suZcgK3ThkDE9M&tbnid=b73ygbee5kbN5M&vet=12ahUKEwiI3_bRwf6KAxVUTGwGHRQcCM0QM3oFCIMBEAA..i&w=893&h=1188&hcb=2&ved=2ahUKEwiI3_bRwf6KAxVUTGwGHRQcCM0QM3oFCIMBEAA"}}/>
//       <Text>Name</Text>
//       <Text>Email</Text>
//       </View> */}
        
//     </View>
//   )
// }
// export default App

// const styles = StyleSheet.create({
//   conatiner:{
//     width:"100%",
//     height:"100%",
//     backgroundColor:"#dadada",
//     paddingVertical:10, 
//     paddingHorizontal:20
//   },
//   card:{
//     width:100,
//     height:100 ,             
//     backgroundColor:"white",
//     borderRadius:10,
//     padding:5,
//     alignItems:"center",
//     justifyContent:"center"
//   }
// })
  
// Part-6
// User se Input

// import { useState } from "react";
// import { Button, StyleSheet,Text,TextInput,View } from "react-native";
// const App = () => {
//   const [text,setText]=useState('');
//    const [submittedText,setsubmittedText]= useState('');

//   const handleSubmit = () =>{
//      setsubmittedText(text);
//      setText('');
//   }
//   return ( 
//   <View style={styles.container}>
//     <Text style={styles.title}>  something about her </Text>
//     <TextInput 
//   placeholder='Enter Your Name'
//    style={styles.input}
//    // Two way Binding
//   value={text}
//   onChangeText={setText}
//   multline
//   numberOfLines={1}
//   /> 
//     <Text numberOfLines={1}>
//       gyhilfghou;wopifoj[grwhuhydvow;ewwep]eworefjofhj]0pifhjipf[fi0]
//     </Text>

//   <Button title="Submit" onPress={handleSubmit}/>
//    {submittedText ? (<Text>Result: {submittedText}</Text>) :null}
//   </ View>
//   ) 
// }
// export default App

// const styles =StyleSheet.create({
//   container: { 
//   flex:1,
//   justisfycontent:'center',
//   alignItem:'center',
//   padding:20,
//   },
//   title:{
//     fontSize:20,
//     fontWeight:"500"
//   },
//   input:{
//     width:"100%",
//     padding:5,
//     paddingVertical:10,
//     borderWidth:1,
//     borderRadius:5
//   }
// })
 
// Navigation Bar 

// import {  StyleSheet,Text,View } from "react-native";
// import Home from "./src/Screen/Home";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Search from "./src/Screen/Search";
// import Profile from "./src/Screen/Profile";
// import { NavigationContainer } from "@react-navigation/native";
// const Stack = createNativeStackNavigator();
// const StackNavigator =()=>{
//   return (
//     <Stack.Navigator >
//       <Stack.Screen name="Home" component={Home} /> 
//      <Stack.Screen name="Search" component={Search}/>
//      <Stack.Screen name="Profile" component={Profile}/>
//     </Stack.Navigator>
//   )
// }
// const App = ()=> {  
//   return (
//     <NavigationContainer>
//       <StackNavigator/>
//     </NavigationContainer>
//   )
// }
// export default App

// const style = StyleSheet.create({})
                     
//part -2

// import {  StyleSheet,Text,View } from "react-native";
// import Home from "./src/Screen/Home";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Search from "./src/Screen/Search";
// import Profile from "./src/Screen/Profile";
// import { NavigationContainer } from "@react-navigation/native";
// const StackNavigator =()=>{
//   const Stack = createNativeStackNavigator();
//   return (
//     <Stack.Navigator initialRouteName="Home" // Globaly Apply hoga 
//     screenOptions={{
//       headerStyle:{
//         backgroundColor:"Yellow"
//       }
//     }}> 

//    {/* <Stack.Navigator>  */}
//    <Stack.Screen name="Search" component={Search}
//    options={{headerShown:false}}/> 
//    {/* Override kregi  */}
//      <Stack.Screen name="Home" component={Home} options={{title:"Home Screen",headerStyle:{backgroundColor:red}}}/> 
//      <Stack.Screen name="Profile" component={Profile}/>
//     </Stack.Navigator>
//   )
// }
// const App = ()=> {  
//   return (
//     <NavigationContainer>
//       <StackNavigator/>
//     </NavigationContainer>
//   )
// }
// export default App

// const style = StyleSheet.create({})


//Part -7
// Tab Navigatio    

// import {  StyleSheet,Text,View } from "react-native";
// import Home from "./src/Screen/Home";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Search from "./src/Screen/Search";
// import Profile from "./src/Screen/Profile";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
// import Octicons from 'react-native-vector-icons/Octicons';



// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator ();

// // const StackNavigator =()=>{
// // }
// function TabNavigator(){  
// return (
//     <Tab.Navigator initialRouteName="Home" 
//     // Color used on Tab bar
//     screenOptions={{tabBarActiveTintColor:"red",
//       tabBarInactiveBackgroundColor:"black",
//       tabBarStyle:{
//         height:60
//       },
//       tabBarLabelStyle:{
//         fontSize:12
//       }
//     }}>
//      <Tab.Screen name="Home" component={Home} 
//      options={{tabBarActiveTintColor:"pink",
//       tabBarIcon:(color)=>( 
//       // <AntDesign name="home" size={30} color="purple" />
//       // props used  
//     <AntDesign name="home" size={30} color={color} />
//       )
//     }}/>

//      <Tab.Screen name="Search" component={Search} 
//       options={{
//         tabBarIcon:(color)=>( 
//         // <Feather name="user" size={30} color="pink" />
//         <Feather name="user" size={30} color={color} />
//         )
//       }}
//      />
//      <Tab.Screen name="Profile" component={Profile}
//       options={{
//         tabBarIcon:(color)=>( 
//         // <Octicons name="search" size={30} color="yellow" />
//         <Octicons name="search" size={30} color={color} />
//         )
//       }}/>
     
//     </Tab.Navigator>
//   ); 
// }
// const App = ()=> {  
//   return (
//     <NavigationContainer>
//     <TabNavigator/>
//     </NavigationContainer>
//   )
// }
// export default App

// const style = StyleSheet.create({})
                     


// Dashboard Project 

// import { View, Text,StyleSheet, useColorScheme } from 'react-native'
// import HomeScreen from "./src/Dashbord/HomeScreen";


// const App = () => {
 
//   return (
//   <View >
//     <HomeScreen/>
//   </View>
//   )
// }
// export default App

// const styles = StyleSheet.create({})



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false); // State to track toggle status

  const handleToggle = () => {
    setIsOn(!isOn); // Toggle between true and false
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isOn ? styles.buttonOn : styles.buttonOff]}
        onPress={handleToggle}
      >
        <Text style={styles.buttonText}>{isOn ? 'On' : 'Off'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonOn: {
    backgroundColor: '#4CAF50', // Green color for "On" state
  },
  buttonOff: {
    backgroundColor: '#F44336', // Red color for "Off" state
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ToggleButton;

