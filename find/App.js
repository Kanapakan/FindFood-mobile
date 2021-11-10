import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FirstPage from './screen/FirstPage';
import Login from './screen/Login';
import Register from './screen/Register';
import Register2 from './screen/Register2';
import MyProfile from './screen/MyProfile';
import EditProfile from './screen/EditProfile';
import Breakfast from './screen/Breakfast';
import Menu from './screen/Menu';
import Home from './screen/Home';
import FindRecipe from './screen/FindRecipe';
// import PieChart from './screen/PieChart'
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <FindRecipe/>
    // <EditProfile/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
