import React, { useRef } from "react";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker';


const Register2 = () => {

  return (
    <View style={styles.container}>
       
       <Image style={styles.leafLeft} source={require("../assets/leaf_left-removebg.png")}/>
            <Text style={styles.baseText} >
                <Text style={styles.headText}>ข้อมูลส่วนตัว</Text>
               
            </Text>
       
        
      
        <View style={{alignItems: "center" , marginTop: 40,}}>

            <View style={styles.pickerBorder}>
                <Picker
                    // selectedValue={selectedValue}
                    // style={styles.pickerdropdown}
                    // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                
                >
                {/* อย่าลืม disable  และจัดให้ตรงกลาง*/}
                    <Picker.Item label="เพศ" />
                    <Picker.Item label="ชาย" value="male" />
                    <Picker.Item label="หญิง" value="femaile" />
                </Picker>
            </View>
            
            <TextInput
                style={styles.Box}
                placeholder="อายุ"
                keyboardType="numeric"
                //value={}
                //onChangeText={}
            />
            <TextInput
                style={styles.Box}
                placeholder="ส่วนสูง"
                keyboardType="numeric"
                //value={}
                //onChangeText={}
            />
            <TextInput
                style={styles.Box}
                placeholder="น้ำหนัก"
                keyboardType="numeric"
                //value={}
                //onChangeText={}
            />

            <View style={styles.pickerBorder2}>
                <Picker
                    // selectedValue={selectedValue}
                    style={styles.pickerdropdown}
                    // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                
                >
                {/* อย่าลืม disable  และจัดให้ตรงกลาง*/}
                    <Picker.Item label="พฤติกรรมการออกกำลังกาย" />
                    <Picker.Item label="ออกกำลังกายน้อยมาก" value="1.2" />
                    <Picker.Item label="ออกกำลังกายน้อย (อาทิตย์ละ 1 – 3 วัน)" value="1.375" />
                    <Picker.Item label="ออกกำลังกายปานกลาง (อาทิตย์ละ 3 – 5 วัน)" value="1.55" />
                    <Picker.Item label="ออกกำลังกายอย่างหนัก (อาทิตย์ละ 6 – 7 วัน)" value="1.725" />
                    <Picker.Item label="เป็นนักกีฬาหรือทำงานที่ต้องใช้แรงงานมาก" value="1.9" />
                    
                </Picker>
            </View>
            
        </View>

        <View style={{alignItems: "center" , marginTop: 50,}}>
            <TouchableOpacity 
                // onPress={} 
                style={styles.btnContainer}>
                <Text style={styles.btnText}>ลงทะเบียน</Text>
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
  leafLeft: {
    top: 10,
    left: 5,
    height: "25%",
    width: "25%"
},
  headText:{
    fontSize:35,
    fontWeight: "bold",
    color: "#547f53"
},
    baseText:{
    // fontFamily: 'Roboto',
    textAlign: "center",
    marginTop: -70

  },
  pickerBorder:{
    width: "80%",
    height: 40,
    borderColor: '#8ec18d',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
  },
  pickerBorder2:{
    width: "80%",
    height: 40,
    borderColor: '#8ec18d',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 30,
    
  },
//   pickerdropdown:{
    
//     },
    Box:{
    marginTop: 30,
    width: "80%",
    height: 40,
    borderColor: "#8ec18d",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
  },
  btnContainer: {
    width: "80%",
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
    
});

export default Register2;

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