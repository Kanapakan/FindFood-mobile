import React, { useRef } from "react";
import {Text, View, StyleSheet, Image } from "react-native";


const FirstPage = () => {
   
  return (
    <View style={styles.container}>
        <Image style={styles.leafLeft} source={require("../assets/leaf_left-removebg.png")}/>
        <View style={styles.boxText}>
            <Text style={styles.baseText} >
                <Text style={styles.headText}>Find Food Fit Me {"\n"}</Text>
                <Text style={styles.normaltext}>หาอาหารที่ใช่ จากอะไรที่ชอบ</Text>
            </Text>
        </View>
        <Image style={styles.leafRight} source={require("../assets/leaf_right-removebg.png")}/>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  boxText:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText:{
    fontFamily: 'Roboto',
    textAlign: "center"
  },
  headText:{
      fontSize:35,
      fontWeight: "bold",
  },
  normaltext:{
    fontSize: 20,
    color: "#808080"
  },
  leafLeft: {
      top: 10,
      left: 5,
      height: "25%",
      width: "25%"
  },
  leafRight: {
    top: 10,
    left: 300,
    height: "25%",
    width: "25%"
}
  
});

export default FirstPage;

{/* <Text style={{fontFamily: 'normal'}}>  normal </Text>
        <Text style={{fontFamily: 'notoserif'}}>  notoserif </Text>
        <Text style={{fontFamily: 'sans-serif'}}>  sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>
        <Text style={{fontFamily: 'serif'}}>  serif </Text>
        <Text style={{fontFamily: 'Roboto'}}>  Roboto </Text>
        <Text style={{fontFamily: 'monospace'}}>  monospace </Text>       */}