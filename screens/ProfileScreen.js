import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { Image, Avatar, Divider } from "react-native-elements";
// import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {

  

  const [data, setData] = useState([])
  const {userToken} = useContext(AuthContext)
  const {userInfo} = useContext(AuthContext);
  const username = userInfo.user.username
  const loadData = () => {
    fetch(`http://gilscore.azurewebsites.net/api/profiles/${username}/`,{
     method: 'GET',
     headers:{
      'Authorization': 'Token ' + userToken
     }
    })

    .then(resp => resp.json())
    .then(data => {
       console.log(data)
       setData(data)
       setLoading(false)
    })
    .catch(error => Alert.alert('Error', error.message))
  }

  useEffect(() =>{
    loadData();
   }, [])

  const navigation = useNavigation();
   return (
    <ScrollView>
      <Image
        source={{ uri: "https://www.clactonandfrintongazette.co.uk/resources/images/16030527/?type=responsive-gallery-fullscreen"}}
        style={styles.cover}
      />
      <Avatar
        rounded
        size="large"
        source={{ uri:data.image}}
        containerStyle={styles.avatar}
      />
      <TouchableOpacity 
      style={styles.edit_button}
      onPress={ () => navigation.navigate('edit_profile')}
      >
      
      <Text style={styles.edit_txt_button}>Edit Profile</Text>
    </TouchableOpacity>
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{data.email}</Text>
        <Text style={styles.username}>{data.First_Name} {data.Last_Name}</Text>
        <Text style={styles.username}>@{username}</Text>
        <Text style={styles.bio}>{data.bio}</Text>
        <Text style={styles.followers}>
          <Icon name="map-marker" size={20} color={'#09899b'} />  {data.location}
          </Text>
        <Text style={styles.followers}>Followers   {data.follower_count}</Text>
        <Text style={styles.follow}>Following   {data.following_count} </Text>
        
      </View>
      
    {/* <TouchableOpacity
        style={styles.button}
        onPress ={ () => navigation.navigate('not')}
      >
        <Text>Get started with CallCenterAfrica</Text>
      </TouchableOpacity> */}
      <Divider />
    </ScrollView>
  )
  
  }





const styles = StyleSheet.create({
    container: {},
    cover: {
      width: "100%",
      height: 140,
      marginTop:20
    },
    avatar: {
      marginLeft: 20,
      marginTop: -40,
      borderWidth: 3,
      borderColor: "white",
      borderStyle: "solid",
    },
    profileInfo: {
      marginLeft: 10,
      // marginTop: 10,
      marginBottom: 5,
    },
    bio: {
      fontSize: 16,
      fontWeight: "400",
      marginTop: 10,
      marginBottom: 10,
      marginRight: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: "900",
      lineHeight: 21,
    },
    username: {
      fontSize: 20,
      fontWeight: "900",
      color: "#657786",
    },
    location: {
      color: "#657786",
      fontSize: 16,
      fontWeight: "500",
    },
    regDate: {
      color: "#657786",
    },
    follow: {
      fontSize: 16,
      marginBottom: 15,
    },
    followers: {
      marginRight: 10,
      fontSize: 16,
      // fontWeight: "600",
      marginBottom: 5,
    },
    edit_button: {
        backgroundColor: '#286086',
        width: "30%",
        borderRadius: 15,
        height: 40,
        color: '#fff',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        marginLeft: "60%",
    },
    edit_txt_button:{
      color: '#fff',
      fontWeight: "900",
    },
  });




