
import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Carousel from './src/Crousel/Carousel';

const App = () => {
  return (
    <View style={styles.container}>
      <Carousel />
      <StatusBar style="auto" /> 
      <Parallax />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});


 