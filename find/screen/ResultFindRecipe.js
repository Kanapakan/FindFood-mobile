import React, { useRef, useState } from "react";
import {Text, View, StyleSheet, Image, ScrollView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 




const ResultFindRecipe  = () =>  {

  return (
    
    // ผลลัพธ์การค้นหาเมนูอาหารจากวัตถุดิบ
        <View style={styles.container}>    
            <Text style={styles.amount}>จำนวน 4 เมนู</Text>

            <ScrollView>

            {/* เมนู ยำวุ้นเส้น */}
            <View style={styles.card}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.food} source={require("../assets/yum.png")}/>

                        <View style={styles.foodBox}>
                            <Text style={styles.foodName}>ยำวุ้นเส้น</Text>
                            <View style={styles.foodTime}>
                                <MaterialIcons name="access-time" size={26} color="black"/>
                                <Text style={styles.timeText}>10 นาที</Text>
                            </View>

                        </View>

                        <View style={{flex:1}}>

                            {/* ไอคอนตอนกด fav สีดำ */}
                            <Ionicons name="bookmark" size={40} color="black" style={styles.favIcon}/>
                            {/* ไอคอนตอนยังไม่กด fav สีขาว */}
                            {/* <Ionicons name="bookmark-outline" size={40} color="black" style={styles.favIcon}/> */}

                            <Text style={styles.foodCal}>120 Kcal.</Text>

                        </View>
            
                    </View>
                </View>
            
                <View style={{ flex: 1, paddingTop: 40 , justifyContent: "center"}}>
                    <Text style={styles.moreText}>วัตถุดิบเพิ่มเติม</Text>
                    <Text style={styles.infoText}>กุ้ง มะเขือเทศ กระเทียม ต้นหอม มะนาว ผักสลัด ไส้กรอก เบค่อน </Text>
                </View>

            </View>

            {/* เมนู สลัด code เหมือนข้างบน แค่ทดลองเฉยๆ */}
            <View style={styles.card}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.food} source={require("../assets/salad.png")}/>

                        <View style={styles.foodBox}>
                            <Text style={styles.foodName}>สลัด</Text>
                            <View style={styles.foodTime}>
                                <MaterialIcons name="access-time" size={26} color="black"/>
                                <Text style={styles.timeText}>10 นาที</Text>
                            </View>

                        </View>

                        <View style={{flex:1}}>

                            {/* ไอคอนตอนกด fav สีดำ */}
                            {/* <Ionicons name="bookmark" size={40} color="black" style={styles.favIcon}/> */}
                            {/* ไอคอนตอนยังไม่กด fav สีขาว */}
                            <Ionicons name="bookmark-outline" size={40} color="black" style={styles.favIcon}/>

                            <Text style={styles.foodCal}>120 Kcal.</Text>

                        </View>
            
                    </View>
                </View>
            
                <View style={{ flex: 1, paddingTop: 40, justifyContent: "center"}}>
                    <Text style={styles.moreText}>วัตถุดิบเพิ่มเติม</Text>
                    <Text style={styles.infoText}>กุ้ง มะเขือเทศ กระเทียม  </Text>
                </View>

            </View>

        </ScrollView>

        </View>

      )      

};
    
const styles = StyleSheet.create({
    container: {
    // flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  amount:{
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    paddingLeft: 20
  },
  // css ผลลัพธ์การค้นหาเมนูอาหารจากวัตถุดิบ
  card:{
    flexDirection: 'column',
    width: "90%",
    height: 200,
    backgroundColor: "#e4efe3",
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 5, 
    borderColor: "#e4efe3",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  food:{
    height: 100,
    flex: 1,
    borderRadius: 15
  },
  foodBox:{
    flexDirection: 'column',
    flex: 2,
  },
  foodName:{
    fontSize: 22,
    fontWeight: "bold",
    flex: 2,
    marginLeft: 10,
    flexWrap: "wrap",
  },
  foodCal:{
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  foodTime:{
    flex: 1,
    marginLeft: 10,
    marginTop: -30
  },
  timeText:{
    fontSize: 18,
    marginTop: -25,
    marginLeft: 30,
  },
  favIcon:{
    alignSelf: "flex-end",
  },
  moreText:{
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    // marginVertical: 5,
    // marginTop: 10
  },
  infoText:{
    fontSize: 18,
    color: "red",
  }



    
    });
    
    export default ResultFindRecipe;
    
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