import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarWidth = width * 0.7; 
  const animatedValue = useState(new Animated.Value(-sidebarWidth))[0];

  const toggleSidebar = () => {
    Animated.timing(animatedValue, {
      toValue: isSidebarOpen ? -sidebarWidth : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Ionicons
            name={isSidebarOpen ? "close-outline" : "menu-outline"}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>Navigation Bar</Text>
      </View>

      {/* Sidebar */}
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: animatedValue }],
          },
        ]}
      >
        {/* Sidebar Close Button */}
        <TouchableOpacity
          onPress={toggleSidebar}
          style={styles.sidebarCloseButton}
        >
          <Ionicons name="close-circle-outline" size={30} color="#6200ee" />
        </TouchableOpacity>
        <Text style={styles.sidebarTitle}>Sidebar Menu</Text>
        <TouchableOpacity style={styles.sidebarItem}>
          <Text style={styles.sidebarItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <Text style={styles.sidebarItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <Text style={styles.sidebarItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <Text style={styles.sidebarItemText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.mainContentText}>
          Welcome! Click the menu icon to open the sidebar.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    height: 60,
    backgroundColor: "#6200ee",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    elevation: 4,
  },
  menuButton: {
    marginRight: 10,
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
    elevation: 5,
    zIndex: 10,
  },
  sidebarCloseButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200ee",
  },
  sidebarItem: {
    paddingVertical: 15,
  },
  sidebarItemText: {
    fontSize: 18,
    color: "#333",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mainContentText: {
    fontSize: 18,
    textAlign: "center",
    color: "#444",
  },
});

export default App;
