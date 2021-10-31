import React, { useRef } from "react";
import {Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";


const Login = () => {
   
  return (
    <View style={styles.container}>
        <Image style={styles.leafLeft} source={require("../assets/fade_leaf_left-removebg.png")}/>
        
        <View style={styles.boxText}>
            <Text style={styles.baseText} >
                <Text style={styles.headText}>Find Food Fit Me {"\n"}</Text>
                <Text style={styles.normaltext}>หาอาหารที่ใช่ จากอะไรที่ชอบ</Text>
            </Text>
        </View>

        <View style={{alignItems: "center" , marginTop: 20}}>
            <Image style={styles.line} source={require("../assets/line-removebg.png")}/>
        </View>

        <View style={{alignItems: "center" , marginTop: 40,}}>
            <TextInput
                style={styles.userNameBox}
                placeholder="ชื่อผู้ใช้"
                keyboardType="email-address"
                //value={}
                //onChangeText={}
            />
            <TextInput
                style={styles.passwordBox}
                placeholder="รหัสผ่าน"
                keyboardType="default"
                secureTextEntry={true}
                //value={}
                //onChangeText={}
            />
        </View>

        <View style={{alignItems: "center" , marginTop: 50,}}>
            <TouchableOpacity 
                // onPress={} 
                style={styles.btnContainer}>
                <Text style={styles.btnText}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
        </View>

        <View style={{alignItems: "center" , marginTop: 50,}}>
            <TouchableOpacity 
                // onPress={}
            >
                <Text style={styles.btnNewText}>สร้างบัญชีใหม่</Text>
            </TouchableOpacity>
        </View>
        
           
        


       
        
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
    // flex: 1,
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
  line:{
    height: 50,
    width: "70%"
  },
  userNameBox:{
    width: "80%",
    height: 40,
    borderColor: "#8ec18d",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
  },
  passwordBox:{
    width: "80%",
    height: 40,
    marginTop: 10,
    borderColor: "#8ec18d",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
  },
  btnContainer: {
    width: "40%",
    elevation: 8,
    backgroundColor: "#8ec18d",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  btnNewText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  }


  
});

export default Login;

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