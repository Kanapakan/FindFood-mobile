import React, { useRef } from "react";
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker';



const Register2 = () => {

  return (
// ข้อมูลส่วนตัว

    // <View style={styles.container}>
    //   <View style={styles.headBox} >
    //     <Text style={styles.headText}>ข้อมูลส่วนตัว</Text>
    //   </View>
    //   <Text style={styles.btnTextAll}>เพศ</Text>
    //   <View style={styles.pickerBorder}>
    //     <Picker
    //       // selectedValue={selectedValue}
    //       // style={styles.pickerdropdown}
    //       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                
    //     >
    //     {/* อย่าลืม disable  และจัดให้ตรงกลาง*/}
    //       <Picker.Item label="เพศ" />
    //       <Picker.Item label="ชาย" value="male" />
    //       <Picker.Item label="หญิง" value="femaile" />
    //     </Picker>
    //   </View>

    //   <Text style={styles.btnTextAll}>อายุ</Text>
    //   <TextInput
    //     style={styles.ageBox}
    //     placeholder="อายุ"
    //     keyboardType="numeric"
    //     //value={}
    //     //onChangeText={}
    //   />

    //   <Text style={styles.btnTextAll}>น้ำหนัก</Text>  
    //   <TextInput
    //     style={styles.weightBox}
    //     placeholder="น้ำหนัก"
    //     keyboardType="numeric"
    //     //value={}
    //     //onChangeText={}
    //   />

    //   <Text style={styles.btnTextAll}>ส่วนสูง</Text>
    //   <TextInput
    //       style={styles.heightBox}
    //       placeholder="ส่วนสูง"
    //       keyboardType="numeric"
    //       //value={}
    //       //onChangeText={}
    //   />

    //   <Text style={styles.btnTextAll}>พฤติกรรม</Text>  
    //   <View style={styles.pickerBorder2}>
    //     <Picker
    //       // selectedValue={selectedValue}
    //       style={styles.pickerdropdown}
    //       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

    //     >
    //     {/* อย่าลืม disable  และจัดให้ตรงกลาง*/}
    //       <Picker.Item label="พฤติกรรมการออกกำลังกาย" />
    //       <Picker.Item label="ออกกำลังกายน้อยมาก" value="1.2" />
    //       <Picker.Item label="ออกกำลังกายน้อย (อาทิตย์ละ 1 – 3 วัน)" value="1.375" />
    //       <Picker.Item label="ออกกำลังกายปานกลาง (อาทิตย์ละ 3 – 5 วัน)" value="1.55" />
    //       <Picker.Item label="ออกกำลังกายอย่างหนัก (อาทิตย์ละ 6 – 7 วัน)" value="1.725" />
    //       <Picker.Item label="เป็นนักกีฬาหรือทำงานที่ต้องใช้แรงงานมาก" value="1.9" />            
    //     </Picker>
    //   </View>

    //   <View style={{alignItems: "center" , marginTop: 30,}}>
    //     <TouchableOpacity 
    //       // onPress={} 
    //       style={styles.btnSave}>
    //       <Text style={styles.btnSaveText}>บันทึก</Text>
    //     </TouchableOpacity>
    //   </View>

    // </View>

// ข้อมูลเข้าสู่ระบบ
    <View style={styles.container}>
      <View style={styles.headBox} >
        <Text style={styles.headText}>ข้อมูลเข้าสู่ระบบ</Text>
      </View>
      <Text style={styles.btnTextAll}>ชื่อผู้ใช้</Text>
      <TextInput
        style={styles.Box}
        placeholder="ชื่อผู้ใช้"
        keyboardType="email-address"
        //value={}
        //onChangeText={}
      />

      <Text style={styles.btnTextAll}>รหัสผ่านเก่า</Text>
      <TextInput
        style={styles.Box}
        placeholder="รหัสผ่านเก่า"
        keyboardType="default"
        secureTextEntry={true}
        //value={}
        //onChangeText={}
      />

    <Text style={styles.btnTextAll}>รหัสผ่านใหม่</Text>
    <TextInput
        style={styles.Box}
        placeholder="รหัสผ่านใหม่"
        keyboardType="default"
        secureTextEntry={true}
        //value={}
        //onChangeText={}
      />
    <Text style={styles.btnTextAll}>ยืนยันรหัสผ่านใหม่</Text>
    <TextInput
        style={styles.Box}
        placeholder="ยืนยันรหัสผ่านใหม่"
        keyboardType="default"
        secureTextEntry={true}
        //value={}
        //onChangeText={}
      />
    <View style={{alignItems: "center" , marginTop: 30,}}>
      <TouchableOpacity 
        // onPress={} 
        style={styles.btnSave}>
        <Text style={styles.btnSaveText}>บันทึก</Text>
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
  headBox:{
    backgroundColor: "#e3e3e3",
    //ตอนเอาลง tab เอา marginTop ออกด้วยนะ
    marginTop: 20,
    alignItems: "flex-start",
    padding: 8
  },
  headText:{
    fontSize:23,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 30
  },
  btnTextAll: {
    fontSize: 18,
    color: "#000",
    marginLeft: 50,
    marginTop: 30
  },
  pickerBorder:{
    width: "25%",
    height: 45,
    borderColor: '#adacac',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: -35,
    marginLeft: 150,
  },
  Box:{
    marginTop: -35,
    marginLeft: 200,
    width: "40%",
    height: 45,
    borderColor: '#adacac',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
  },
  pickerBorder2:{
    width: "50%",
    height: 45,
    borderColor: '#adacac',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: -35,
    marginLeft: 150, 
  },
  btnSave: {
    width: "40%",
    elevation: 8,
    backgroundColor: "#8ec18d",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  btnSaveText: {
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