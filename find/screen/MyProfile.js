import React, { useRef } from "react";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";


const MyProfile = () => {
   
  return (
    <View style={styles.container}>
        <View style={[styles.item1, {flex:2}]}>
            <Text style={styles.baseText} >
                <Text style={styles.headText}>โปรไฟล์ของฉัน</Text>
            </Text>

            <View style={{alignItems: "center"}}>
                <Image style={styles.profile} source={require("../assets/Eyes-amico-removebg.png")}/>
                {/* <Image style={styles.profile} source={require("../assets/Eyes-pana-removebg.png")}/> */}
            </View>
            

            <View style={{alignItems: "center" , marginTop: -50,}}>
                <TouchableOpacity 
                    // onPress={} 
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>แก้ไขโปรไฟล์</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.item2, {flex:3}]}>
            <Text style={styles.btnTextAll}>เพศ</Text>
            <View style={styles.btnContainerAll}>
                    <Text style={styles.btnTextAll2}>หญิง</Text>
            </View>

            <Text style={styles.btnTextAll}>อายุ</Text>
            <View style={styles.btnContainerAll}>
                    <Text style={styles.btnTextAll2}>25</Text>
            </View>

            <Text style={styles.btnTextAll}>น้ำหนัก</Text>
            <View style={styles.btnContainerAll}>
                    <Text style={styles.btnTextAll2}>60</Text>
            </View>

            <Text style={styles.btnTextAll}>ส่วนสูง</Text>
            <View style={styles.btnContainerAll}>
                    <Text style={styles.btnTextAll2}>165</Text>
            </View>

            <Text style={styles.btnTextAll}>พฤติกรรม</Text>
            <View style={styles.btnContainerAll2}>
                    <Text style={styles.btnTextAll2}>ออกกำลังกายน้อย</Text>
            </View>

            <View style={styles.circle}>
                <Text style={styles.calorieText}>แคลอรี่ {"\n"}</Text>
                <Text style={styles.calorieText2}>ที่ควรได้รับ/วัน</Text>
                <Text style={styles.KcalText}>1705 Kcal.</Text>
                <Text style={styles.calorieText3}>แคลอรี่ไม่ควรต่ำกว่า</Text>
                <Text style={styles.calorieText4}>1421 Kcal.</Text>
            </View>
        </View>
        
        

        
        
        

        


       
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    flexDirection: "column"
    // alignItems: "center",
    // justifyContent: "center",
  },
  item1:{
    backgroundColor:"#e4efe3" ,

  },
  item2:{
    backgroundColor:"#fff" , 
  },
  headText:{
    fontSize:35,
    fontWeight: "bold",
    color: "#547f53"
    },
  baseText:{
        // fontFamily: 'Roboto',
    textAlign: "center",
    marginTop: 40
  },
  profile:{
    marginTop: -10,
    height: "70%",
    width: 120
  },
  btnContainer: {
    width: "35%",
    elevation: 8,
    backgroundColor: "#cecece",
    borderRadius: 10,
    paddingVertical: 5,
    // paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  },
  btnTextAll: {
    fontSize: 18,
    color: "#000",
    margin: 30,
  },
  btnContainerAll: {
    width: "20%",
    marginTop: -60,
    marginLeft: 120,
    backgroundColor: "#8ec18e",
    borderRadius: 10,
    padding: 10,
    // paddingHorizontal: 20,
  },
  btnTextAll2: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center", 
  },
  btnContainerAll2:{
    width: "50%",
    marginTop: -60,
    marginLeft: 120,
    backgroundColor: "#8ec18e",
    borderRadius: 10,
    padding: 10,
  },
  circle:{
    width: 180,
    height: 180,
    marginTop: -290,
    marginLeft: 220,
    borderRadius: 200 / 2,
    backgroundColor: "#fff",
    borderColor: "#8ec18e",
    borderWidth: 5
  },
  calorieText:{
      fontSize: 18,
      alignSelf: "center", 
      marginTop: 15,
  },
  calorieText2:{
    fontSize: 15,
    alignSelf: "center", 
    marginTop: -20,
    },
  KcalText:{
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center", 
    color: "#8ec18e",
    marginTop: 10
  },
  calorieText3:{
    fontSize: 13,
    alignSelf: "center", 
    marginTop: 15
    },
  calorieText4:{
    fontSize: 13,
    alignSelf: "center", 
    color: "#8ec18e",
    fontWeight: "bold",
    },
});

export default MyProfile;

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