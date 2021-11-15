import React, { useRef, useState } from "react";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { CheckBox } from 'react-native-elements'




const FindRecipe  = () =>  {
const [checkedVegan, setcheckedVegan] = useState(false);
const [checkedGluten, setcheckedGluten] = useState(false);
const [checkedEgg, setcheckedEgg] = useState(false);

  return (
    // ผลการค้นหา    
    
        // <View style={styles.container}>
        //     <View style={styles.headBox} >
        //         <Text style={styles.headText}>ผลการค้นหา</Text>
        //     </View>
    
           
        //     {/* 1 รายการอาหาร */}
        //     <View>
        //         <View style={{flexDirection: 'row', marginTop: 20}}>
        //             <Image style={styles.food} source={require("../assets/yum.png")}/>
    
        //             <View style={styles.foodBox}>
        //                 <Text style={styles.foodName}>ยำวุ้นเส้น</Text>
        //                 <View style={styles.foodTime}>
        //                     <MaterialIcons name="access-time" size={26} color="black"/>
        //                     <Text style={styles.timeText}>10 นาที</Text>
        //                 </View>
    
        //             </View>
        //             <Text style={styles.foodCal}>120 Kcal.</Text>
                
        //         </View>
        //         <View style={styles.line} />
    
        //     </View>      
          
        // </View>
    
    // ค้นหาด้วยตัวเอง
    
        <View style={styles.container}>
            <View style={styles.headBox} >
                <Text style={styles.headText}>ค้นหาด้วยตัวเอง</Text>
            </View>
    
            <Text style={styles.sensitiveText}>การแพ้</Text>


            {/* checkbox 1 อัน Vegan */}
            <View style={styles.checkboxContainer}>

              <View style={styles.checkContainer}>
                <CheckBox
                  checked={checkedVegan}
                  onPress={() => setcheckedVegan(!checkedVegan)}
                  checkedColor='#547f53'
                  // Size='20'
                />
              </View>

              <Text style={styles.typeSensitive}>Vegan</Text>

            </View>

            {/* checkbox 1 อัน Gluten free */}
            <View style={styles.checkboxContainer}>

              <View style={styles.checkContainer}>
                <CheckBox
                  checked={checkedGluten}
                  onPress={() => setcheckedGluten(!checkedGluten)}
                  checkedColor='#547f53'
                  // Size='20'
                />
              </View>

              <Text style={styles.typeSensitive}>Gluten free</Text>

            </View>

            {/* checkbox 1 อัน Egg free */}
            <View style={styles.checkboxContainer}>

              <View style={styles.checkContainer}>
                <CheckBox
                  checked={checkedEgg}
                  onPress={() => setcheckedEgg(!checkedEgg)}
                  checkedColor='#547f53'
                  // Size='20'
                />
              </View>

              <Text style={styles.typeSensitive}>Egg free</Text>
      
            </View>

            {/* checkbox 1 อัน อื่นๆ */}
            <View style={styles.checkboxContainer}>

              <View style={styles.checkContainer2}>
                <CheckBox
                  checked={checkedEgg}
                  onPress={() => setcheckedEgg(!checkedEgg)}
                  checkedColor='#547f53'
                  // Size='20'
                />
              </View>

              <Text style={styles.typeSensitive2}>อื่น ๆ</Text>
              <TextInput
                style={styles.textInputBox}
                placeholder="โปรดระบุ"
                keyboardType='default'
                //value={}
                //onChangeText={}
            />

            </View>
            
            
            
            

    
            <View style={{flex:1, justifyContent:"flex-end",alignItems: "center", margin: 20}}>
                <TouchableOpacity 
                    // onPress={} 
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>ต่อไป</Text>
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
  headBox:{
    backgroundColor: "#e4efe3",
    //ตอนเอาลง tab เอา marginTop ออกด้วยนะ
    marginTop: 20,
    alignItems: "flex-start",
    padding: 8
  },
  headText:{
    fontSize:23,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10
  },
// css ของหน้าผลการค้นหา
  food:{
    height: 100,
    flex: 1,
    marginLeft: 10,
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
    marginTop: 10,
    flexWrap: "wrap",
  },
  foodCal:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    flex: 1,
  },
  foodTime:{
    flex: 1,
    marginLeft: 10,
  },
  timeText:{
    fontSize: 18,
    marginTop: -25,
    marginLeft: 30,
  },
  line:{
      height: 2,
      backgroundColor: "#adacac",
      marginTop: 20
  },

// css ของหน้าค้นหาด้วยตัวเอง
  sensitiveText:{
    fontSize: 23,
    fontWeight: "bold",
    color: "#547f53",
    alignSelf: "center",
    padding: 20
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
  checkboxContainer:{
    flexDirection: "row",
    paddingHorizontal: "20%",
    marginVertical: -5
  },
  checkContainer:{
    flex: 0.3,
  },
  typeSensitive:{
    flex: 1,
    fontSize: 20,
    color: "#547f53",
    alignSelf: "center",
    flexDirection: "row"
  },
  checkContainer2:{
    flex: 1,
  },
  typeSensitive2:{
    flex: 1,
    fontSize: 20,
    color: "#547f53",
    alignSelf: "center",
    flexDirection: "row"
  },
  textInputBox:{
    flex: 2,
    marginHorizontal: 10,
    alignSelf: "center",
    fontSize: 20,
    color: "#547f53",
    borderRadius: 10,
    borderColor: "#8ec18d",
    borderWidth: 2,
    height: 40,
    textAlign: "center",
  }
 



    
    });
    
    export default FindRecipe;
    
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