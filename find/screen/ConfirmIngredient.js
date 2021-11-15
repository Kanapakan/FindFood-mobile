import React, { useRef, useState } from "react";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import { CheckBox } from 'react-native-elements'




const ConfirmIngredient  = () =>  {

const [checkedChoose1, setcheckedChoose1] = useState(false);
const [checkedChoose2, setcheckedChoose2] = useState(false);

  return (
    
    // ตรวจสอบวัตถุดิบที่เลือก
    
        <View style={styles.container}>    
            <View style={{flex: 3.4 }}>

                <Text style={styles.amount}>จำนวน 2 รายการ</Text>

                <View style={styles.square}>

                        {/* 1 checkbox ข้าวโพด */}
                        <View style={styles.checkboxContainer}>

                            <View style={styles.checkContainer}>
                                <CheckBox
                                checked={checkedChoose1}
                                onPress={() => setcheckedChoose1(!checkedChoose1)}
                                checkedColor='#fff'
                                uncheckedColor='#547f53'
                                // Size='20'
                                />
                            </View>
                            <Text style={styles.ingredientName}>ข้าวโพด</Text>

                            

                        </View>

                        {/* 1 checkbox ผักกาดหอม code เหมือนข้างบนนะ*/}
                        <View style={styles.checkboxContainer}>

                            <View style={styles.checkContainer}>
                                <CheckBox
                                checked={checkedChoose2}
                                onPress={() => setcheckedChoose2(!checkedChoose2)}
                                checkedColor='#fff'
                                uncheckedColor='#547f53'
                                // Size='20'
                                />
                            </View>
                            <Text style={styles.ingredientName}>ผักกาดหอม</Text>

                        </View>

                </View>

            </View>

            
                
            <View style={{flex:0.5, justifyContent:"center", backgroundColor: "#e4efe3"}}>
                <TouchableOpacity 
                    // onPress={} 
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>ค้นหา</Text>
                </TouchableOpacity>
    
            </View>      
          
        </View>
      )      



};
    
const styles = StyleSheet.create({
    container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
// css ตรวจสอบวัตถุดิบที่เลือก
  btnContainer: {
    width: "40%",
    elevation: 8,
    backgroundColor: "#8ec18d",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    alignSelf: "center",
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  square:{
      width: "90%",
      backgroundColor: "#8ec18d",
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 20,
      borderWidth: 5, 
      borderColor: '#8ec18d'
  },
  checkboxContainer:{
    flexDirection: "row",
    marginVertical: -5
  },
  checkContainer:{
    flex: 0.17,
    paddingLeft: 10
  },
  ingredientName:{
    flex: 1,
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    flexDirection: "row"
  },
  amount:{
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    paddingLeft: 20
  }


    
    });
    
    export default ConfirmIngredient;
    
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