import React, { useRef } from "react";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";


const MyProfile = () => {
   
  return (
    <View style={styles.container}>
        <View style={[styles.item1, {flex:2, alignItems: "center"}]}>
            <Text style={styles.baseText} >
                <Text style={styles.headText}>โปรไฟล์ของฉัน</Text>
            </Text>

            <View style={{alignItems: "center", width: "40%", height: 150}}>
                <Image style={styles.profile} source={require("../assets/Eyes-amico-removebg.png")}/>
                {/* <Image style={styles.profile} source={require("../assets/Eyes-pana-removebg.png")}/> */}
            </View>
            

            <View style={{alignItems: "center" , marginTop: 10,}}>
                <TouchableOpacity 
                    // onPress={} 
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>แก้ไขโปรไฟล์</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.item2, {flex:3,}]}>
            
            <View style={{flex: 1,}}>
              <Text style={styles.btnTextAll}>เพศ</Text>
              <Text style={styles.btnTextAll}>อายุ</Text>
              <Text style={styles.btnTextAll}>น้ำหนัก</Text>
              <Text style={styles.btnTextAll}>ส่วนสูง</Text>
              <Text style={styles.btnTextAll}>พฤติกรรม</Text>
              
            </View>

            <View style={{flex: 1,}}>
              <View style={styles.btnContainerAll}>
                <Text style={styles.btnTextAll2}>หญิง</Text>
              </View>
              <View style={styles.btnContainerAll}>
                <Text style={styles.btnTextAll2}>25</Text>
              </View>
              <View style={styles.btnContainerAll}>
                <Text style={styles.btnTextAll2}>60</Text>
              </View>
              <View style={styles.btnContainerAll}>
                <Text style={styles.btnTextAll2}>165</Text>
              </View>
              <View style={styles.btnContainerExercise}>
                <Text style={styles.btnTextExercise}>ออกกำลังกายน้อย</Text>
              </View>
            </View>

            <View style={[styles.circle, {flex: 1.5,}]}>
              <View style={styles.setCircle}>
                  <Text style={styles.calorieText}>แคลอรี่ {"\n"}</Text>
                  <Text style={styles.calorieText2}>ที่ควรได้รับ/วัน</Text>
                  <Text style={styles.KcalText}>1705 Kcal.</Text>
                  <Text style={styles.calorieText3}>แคลอรี่ไม่ควรต่ำกว่า</Text>
                  <Text style={styles.calorieText4}>1421 Kcal.</Text>
              </View>
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
    flexDirection: "row",
    marginBottom: 0
  },
  headText:{
    fontSize:35,
    fontWeight: "bold",
    color: "#547f53"
    },
  baseText:{
    marginTop: 5
  },
  profile:{
    height: "100%",
    width: "100%"
  },
  btnContainer: {
    width: "100%",
    elevation: 8,
    backgroundColor: "#cecece",
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  },
  calorieText:{
      fontSize: 18,
      alignSelf: "center", 
      marginTop: 15,
  },
  calorieText2:{
    fontSize: 15,
    alignSelf: "center",   
    },
  KcalText:{
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center", 
    color: "#8ec18e",
  },
  calorieText3:{
    fontSize: 13,
    alignSelf: "center", 
    },
  calorieText4:{
    fontSize: 13,
    alignSelf: "center", 
    color: "#8ec18e",
    fontWeight: "bold",
    },
    circle:{
      alignItems: "center",
      marginTop: 60
    },
    btnTextAll: {
    fontSize: 18,
    color: "#000",
    margin: 20,
    marginRight: 10
  },
    btnTextAll2: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center", 
    textAlign: "center",
    flexWrap: "wrap",
  },
  btnContainerAll: {
      width: "100%",
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: "#8ec18e",
      borderRadius: 10,
      padding: 10,
     
  },
  btnTextExercise: {
    fontSize: 18,
    marginTop: 0,
    color: "#fff",
    alignSelf: "center", 
    textAlign: "center",
    flexWrap: "wrap",
  },
  btnContainerExercise:{
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#8ec18e",
    borderRadius: 10,
    padding: 10,
  },
    setCircle:{
    width: 150,
    height: 150,
    alignItems: "center",
    borderRadius: 200 / 2,
    backgroundColor: "#fff",
    borderColor: "#8ec18e",
    borderWidth: 5
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