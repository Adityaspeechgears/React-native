
// import { useState } from 'react';
// import {Text,Dimensions, View, Image } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// const Carousel = () => {
//   const [pagingEnabled,setPagingEnabled]=useState
//     const width = Dimensions.get('window').width;
//     const list =[
//       {  
//         id:1,
//         title:"First Item",
//         image:"https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fi0.wp.com%2Fpicjumbo.com%2Fwp-content%2Fuploads%2Fmysterious-fantasy-forest-with-old-bridges-free-image.jpg%3Fw%3D600%26quality%3D80&imgrefurl=https%3A%2F%2Fpicjumbo.com%2Ffree-photos%2Fpath%2F&docid=WS9SEro0uj8KNM&tbnid=yj7nLOMQVzeYNM&vet=12ahUKEwj_pIOx3o2LAxUg3jgGHaDKKOoQM3oECGUQAA..i&w=599&h=399&hcb=2&ved=2ahUKEwj_pIOx3o2LAxUg3jgGHaDKKOoQM3oECGUQAA"
//       },
//       {  
//         id:2,
//         title:"First Item",
//         image:"https://pixabay.com/photos/search/"
//       },
//       {  
//         id:3,
//         title:"First Item",
//         image:('')
//       },
//       {  
//         id:4,
//         title:"First Item",
//         image:('')
//       }
//     ]
//     return (
//         <View style={{ flex: 1 }}>
//             <Carousel
//               width={PAGE_WIDTH}
//               height={PAGE_WIDTH *0.6}
//               vertical={false}
//                 loop
//                 pagingEnabled={pagingEnabled}
//                 snapEnabled={snapEnabled}
//                 autoPlay={autoPlay}
//                 autoPlayInterval={1500}
//                 onPressChange={(_, absoluteProgress)=>
//                 (ProgressValue.value=absoluteProgress)
//                 }
//                 mode="parallax"
//                 modeConfig={{
//                   parallaxScrollingScale:0.9,
//                   parallaxScrollingoffset:50,
//                 }}

//                 // loop

                

//                 // data={[...new Array(6).keys()]}
//                 // scrollAnimationDuration={1000}
//                 // onSnapToItem={(index) => console.log('current index:', index)}
//                 // renderItem={({ index }) => (
//                 //     <View
//                 //         style={{
//                 //             flex: 1,
//                 //             borderWidth: 1,
//                 //             justifyContent: 'center',
//                 //         }}
//                 //     > 
//                 //         <Text style={{ textAlign: 'center', fontSize: 30 }}>
//                 //             {index}
//                 //         </Text>
//                 //     </View>
//                 // )}
                
//                 // 2 

//                 // width={width}
//                 // height={width / 2}
//                 // autoPlay={true}
//                 // data={list}
//                 // pagingEnabled={pagingEnabled}
//                 // scrollAnimationDuration={1000}

//             // renderItem={({item}) =>(
//             //   <View styles={styles.CarouselItem}>
//             // <Image styles={styles.img} source={item.image}/>
//             // <Image />

//             data={list}
//                 scrollAnimationDuration={1000}
//             renderItem={({item}) =>(
//               <View styles={{
//                 flex:1,
//                 flexDirection:"row",
//                 justifyContent:"space-between",
//                 alignSelf:"center",
//                 backgroundColor:item ?.color
//               }}
//               >    
//          </View>
//             )}
//          />
//         </View>
//     );
// }

// export default Carousel ;


import React from "react";
import { StyleSheet, View, Image, Dimensions, StatusBar, Text, SafeAreaView } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const App = () => {
  const width = Dimensions.get("window").width;

  const list = [
    {
      id: 1,
      title: "First Item",
      image:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/mysterious-fantasy-forest-with-old-bridges-free-image.jpg?w=600&quality=80",
    },
    {
      id: 2,
      title: "Second Item",
      image:
        "https://pixabay.com/get/g9b9a0eaaefd46c56c5c7aee9b77a5cdd8c6e76cf946aa8b5c35a364c8056169e627c2161af0985b84ff5c5fc0382806a_640.jpg",
    },
    {
      id: 3,
      title: "Third Item",
      image:
        "https://pixabay.com/get/g9f536c51cc3eaa5b161b228d18e44104f379a241e7a213db04f1d050356054c9d65db3452962c87c91a6897593b8b047_640.jpg",
    },
    {
      id: 4,
      title: "Fourth Item",
      image:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-morning-on-a-dirt-road-with-golden-leaves-picjumbo-com.jpg?w=600&quality=80",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Carousel
          width={width}
          height={width * 0.6}
          data={list}
          loop
          autoPlay
          autoPlayInterval={2000}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
        <StatusBar barStyle="dark-content" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default App;
