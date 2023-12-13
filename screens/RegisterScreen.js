import { StatusBar } from "react-native";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from "../context/AuthContext";



export default function RegisterScren() {

  const {register} =useContext(AuthContext);
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigation =useNavigation();
   
    return (
      <View style={styles.container}>
        <Image style={styles.image}  />
   
        <StatusBar style="auto" />
        <Text style={styles.loginHeader} >Register</Text>
        {/* <View style={styles.inputView}>
      <Icon name="account" size={20} />
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#333"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View> */}
      {/* <View style={styles.inputView}>
      <Icon name="account" size={20} />
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#333"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View> */}
  
      <View style={styles.inputView}>
      <Icon name="at" size={20} />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#333"
          value={username}
          onChangeText={(username) => setUserName(username)}
        />
      </View>
  
        <View style={styles.inputView}>
        <Icon name="at" size={20} />
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            keyboardType="email-address"
            placeholderTextColor="#333"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
        <Icon name="lock" size={20} />
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#333"
            secureTextEntry={true}
            value= {password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        {/* <View style={styles.inputView}>
        <Icon name="lock" size={20} />
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password."
            placeholderTextColor="#333"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View> */}
   
   
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{register(username, email,password)}}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
  
        <View  style={styles.register}>
        <Text >Already Registered:  </Text>
        <TouchableOpacity onPress={ () => navigation.navigate('login')}>
          <Text style={styles.register_button}>Login</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
   
    image: {
      marginBottom: 40,
    },
    loginHeader: {
      fontSize: 28,
      marginBottom: 20 ,
      color: '#09899b', 
      justifyContent: "center",
  
    },
    inputView: {
      borderBottomColor:'#ccc',
      borderBottomWidth:1,
      // width: "70%",
      marginBottom: 20,
      flexDirection: 'row',
   
      // alignItems: "center",
    },
   
    TextInput: {
      // height: 50,
      flex: 1,
      paddingVertical:0,
      paddingLeft:10,
      // padding: 10,
      // backgroundColor:'#ccc',
  
      color: '#333',
    },
   
    register_button:{
      color: '#09899b'
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#09899b",
    },
    register:{
      flexDirection: 'row',
      justifyContent: "center",
      marginTop: 30,
    }
  });