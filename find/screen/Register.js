import React, { useRef } from "react";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";


const Register = () => {
   
  return (
    <View style={styles.container}>
        <View style={{alignItems: "center", marginTop: 40}}>
            <Image style={styles.diet} source={require("../assets/Diet.gif")}/>
        </View>
        
        
      
        <View style={{alignItems: "center" , marginTop: 30,}}>
            <TextInput
                style={styles.Box}
                placeholder="ชื่อผู้ใช้"
                keyboardType="email-address"
                //value={}
                //onChangeText={}
            />
            <TextInput
                style={styles.Box}
                placeholder="รหัสผ่าน"
                keyboardType="default"
                secureTextEntry={true}
                //value={}
                //onChangeText={}
            />
            <TextInput
                style={styles.Box}
                placeholder="ยืนยันรหัสผ่าน"
                keyboardType="default"
                secureTextEntry={true}
                //value={}
                //onChangeText={}
            />
        </View>

        <View style={{alignItems: "center" , marginTop: 40,}}>
            <TouchableOpacity 
                // onPress={} 
                style={styles.btnContainer}>
                <Text style={styles.btnText}>ต่อไป</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: "center" , marginTop: 40,}}>
                <Text style={styles.btnNewText2}>มีบัญชีผู้ใช้อยู่แล้ว ?</Text>
                <TouchableOpacity 
                    // onPress={} 
                >
                    <Text style={styles.btnNewText}> เข้าใช้งาน</Text>
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
  diet: {
      height: 250,
      width: "60%"
  },
  line:{
    height: 50,
    width: "70%"
  },
  Box:{
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
  },
  btnNewText2: {
    fontSize: 20,
    color: "#000",
    alignSelf: "center",
  }


  
});

export default Register;

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