import { Avatar, Divider } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../context/AuthContext';
import { View, Text, FlatList, Dimensions,SafeAreaView, Alert, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { FAB } from "@rneui/base";
import { Card } from 'react-native-paper';






export default function OthersProfileScreen(props) {

  const userdata = props.route.params.data;

  const [data, setData] = useState([])
  const {userToken} = useContext(AuthContext)
  const [userName, setUserName] = useState()
  const {userInfo} = useContext(AuthContext);
  const username = userdata.user.username
  // console.log(userdata)
  // const loadData = () => {
  //   fetch(`http://gilscore.azurewebsites.net/api/profiles/${username}/`,{
  //    method: 'GET',
  //    headers:{
  //     'Authorization': 'Token ' + userToken
  //    }
  //   })

  //   .then(resp => resp.json())
  //   .then(data => {
  //     //  console.log(data)
  //      setData(data)
  //     //  setLoading(false)
  //   })
  //   .catch(error => Alert.alert('Error', error.message))
  // }

  const loadDataProfile = () => { 
    fetch('http://gilscore.azurewebsites.net/api/Formula1/feed/', {
      method: 'GET',
      headers:{
        'Authorization': 'Token ' + userToken
      }
     }) 
     .then(resp => resp.json())
     .then(data => {
        setData(data.results)
        setUserName(data.results)
        // console.log(data.result)
        // setLoading(false)
     })
     .catch(error => Alert.alert('Error', error.message))
   }

  // useEffect(() =>{
  //   loadData();
  //  }, [])
  useEffect(() =>{
    loadDataProfile();
   }, [])

   
  const renderData = (item) => {  

    return(
        <Card        onPress= {() => clickedItem(item)} >
                       
          <View style={styles.background}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.innerHeaderContainer}>
                <View style={styles.photoContainer}>
                  <View style={styles.innerPhotoContainer}>
                    <TouchableOpacity>
                    <Image
                      style={styles.photo}
                      source={{uri: item.user.image}}/>
                    </TouchableOpacity>
                  </View>
                </View>              
                <View style={styles.info}>
                  <View style={styles.userDetails}>
                    <Text style={styles.userName}>{item.user.first_name}
                      <Text style={styles.userHandleAndTime}>  @{item.user.username} {item.timestamp}   {}</Text>
                      
                    </Text>
                  </View>
                </View>
                <View style={styles.innerClubContainer}>
                    <TouchableOpacity>
                    <Image
                      style={styles.photo}
                      source={{uri: item.user.Formula1}}/>
                    </TouchableOpacity>
                </View> 
                
              </View>
              <View style={styles.BodyContainer}>
              <View style={styles.tweetBodyContainer}>
                <View style={styles.tweetTextContainer}>
                  <Text style={styles.tweetText}> {item.content}</Text>
                </View>
                <View>
                {item.image !== null ? <Image
                    style={styles.stretch}
                    source={{uri: item.image}}
                    /> : <Image
                    style={{height: "auto"}}
                    source={{uri: item.image}}
                    />}
                </View>
                <View>
                  <View style={styles.tweetActionsContainer}>
                    <TouchableOpacity style={styles.commentButton}>
                      <Icon name="reply" style={styles.commentButtonIcon} size={20} color={'#09899b'} />
                      <Text style={styles.commentsCount}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.retweetButton}>
                      {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                      <Icon name="repeat" size={20} color={'#09899b'} />
                      <Text style={[styles.retweetButtonIcon, {color:"#09899b",fontWeight:"bold"}]}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.likeButton} onPress={() => likeAction()}>
                    <Icon
                      // name={liked ? "heart" : "heart-outline"}
                      // size={20}
                      // color={liked ? "red" : "black"}
                    />
                      <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton}>
                      {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                      <Icon name="share-variant" size={16} color={'#09899b'} />

                    </TouchableOpacity>
                  </View>
                </View>                  
              </View>
              </View>
           
            </View>
          </View>
          </View>
            
        </Card>
    )
}

  const navigation = useNavigation();
   return (
    <SafeAreaView>
      <ScrollView>
      <Image
        source={{ uri: "https://www.clactonandfrintongazette.co.uk/resources/images/16030527/?type=responsive-gallery-fullscreen"}}
        style={styles.cover}
      />
      <Avatar
        rounded
        size="large"
        source={{ uri:userdata.user.image}}
        containerStyle={styles.avatar}
      />
      <TouchableOpacity 
      style={styles.edit_button}
      // onPress={ () => navigation.navigate('')}
      >
      
      <Text style={styles.edit_txt_button}>Follow</Text>
    </TouchableOpacity>
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{userdata.user.email}</Text>
        <Text style={styles.username}>@{userdata.user.username}</Text>
        <Text style={styles.bio}>{userdata.user.bio}</Text>
        <Text style={styles.followers}>
          <Icon name="map-marker" size={20} color={'#09899b'} />  {userdata.user.location}</Text>
        <Text style={styles.followers}>Followers   {userdata.user.follower_count}</Text>
        <Text style={styles.follow}>Following   {userdata.user.following_count} </Text>
       
        
      </View>
      
    {/* <TouchableOpacity
        style={styles.button}
        onPress ={ () => navigation.navigate('not')}
      >
        <Text>Get started with CallCenterAfrica</Text>
      </TouchableOpacity> */}
      <Divider />
      <FlatList         
        data={data}
        // windowSize={4}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        renderItem={({ item }) => {
            return renderData(item)
        }}
        pagingEnabled
        // refreshing={loading}
        // onRefresh={loadData}
        keyExtractor={(item) => `${item.id}`}
      />
      </ScrollView>
    </SafeAreaView>

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
      // fontWeight: "600",
      marginBottom: 15,

    },
    followers: {
      marginRight: 10,
      fontSize: 16,
      // fontWeight: "600",
      marginBottom: 5,
    },
    edit_txt_button:{
      color: '#fff',
      fontWeight: "900",
    },
    edit_button: {
        backgroundColor: '#286086',
        width: "30%",
        borderRadius: 15,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -20,
        marginLeft: "60%",
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    container: {
      borderBottomColor: "black",
      // borderBottomWidth: 2,
      paddingBottom:20,
      paddingTop: 13,
      marginTop:5,
      // marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginLeft: 7.5,
      marginRight: 7.5,
      // flexDirection: "column",
    },
    isReplyContainer: {
  
      borderColor: "green",
      flexDirection: "row",
      borderWidth: 0,
      height: 20,
      // marginTop: 5
    },
    innerContainer: {
      borderColor: "green",
      flexDirection: "column",
      borderWidth: 0,
      height: "auto",
      // alignItems: 'center',
    },
    photoContainer: {
      borderColor: "yellow",
      flexDirection: "column",
      marginLeft: 10,
      // borderWidth: 1,
    },
    innerPhotoContainer: { 
      // height: 50, 
      borderColor: "black",
      // flexDirection: "row",
      // borderBottomWidth: 1,
      alignItems: "center" ,
    },
    innerClubContainer: { 
      // height: 70,
      borderColor: "black",
      justifyContent: 'flex-start',
      // flexDirection: "row", 
      // borderBottomWidth: 1,
      // alignItems: "center",
      left: 60,
      // borderLeftWidth: 1
    },
  
    innerHeaderContainer: { 
      // backgroundColor: '#FFf',
       backgroundColor: '#B6D0E2',
       borderRadius: 10,
      // alignItems:'center',
      borderColor: "#09899b",
      // borderWidth: 1,
      // borderBottomWidth: 1,
      flexDirection:'row',
      marginLeft: 10,
      marginRight: 10,
      paddingBottom: 5,
      borderBottomWidth: 0.2,
      // borderLeftWidth: 1,
      // justifyContent: 'space-between',
    },
    tinyLogo: {
      width: 100,
      height: 40,
    },
    photo: {
      width: 50,
      height: 50,
      borderRadius: 50,
       marginTop: 5
    },
    info: {
      width:'50%',
      // flex: 0.77,
      borderColor: "yellow",
      // flexDirection: "column",
      borderWidth: 0
    },
    userDetails: {
      borderColor: "blue",
      // borderWidth: 1,
      marginBottom: 0,
      // marginTop: 10,
      marginLeft: 10,
    },
    userName: { color: "black", fontWeight: "bold", fontSize:12, },
    userHandleAndTime: {
      color: "rgb(136, 153, 166)",
      fontWeight: "bold",
      //color: "#09899b",
      marginLeft: 5,
      fontStyle: 'italic',
    },
    BodyContainer:{
      alignItems: 'center',
  
    },
    tweetBodyContainer:{
      borderColor: "red", 
      // borderWidth: 1,
      width: '90%',
      justifyContent: 'center',
  
    },
    tweetTextContainer: { borderColor: "blue", borderWidth: 0, },
    tweetText: { color: "black", paddingRight: 10, fontSize:15,  },
    tweetActionsContainer: {
      borderColor: "blue",
      borderWidth: 0,
      marginTop: 5,
      flexDirection: "row",
      paddingBottom: 5,
      justifyContent: 'space-between',
      borderColor: "#09899b",
      borderTopWidth: 0.3,
      width:"95%",
    },
    commentButton: {
      paddingLeft: 0,
      alignItems: "center",
      flexDirection: "row",
      borderColor: "red",
      borderWidth: 0
    },
    commentButtonIcon: {
      margin: 0,
      borderColor: "red",
      borderWidth: 0
    },
    commentsCount: {
      position: "absolute",
      left: 27,
      color: "rgb(136, 153, 166)",
    },
    retweetButton: {
      padding: 5,
      alignItems: "center",
      flexDirection: "row",
      borderColor: "red",
      borderWidth: 0
    },
    retweetButtonIcon: {
      position: "absolute",
      left: 27,  
    },
    likeButton: {
      alignItems: "center",
      flexDirection: "row",
      borderColor: "red",
      borderWidth: 0
    },
    likeButtonIcon: {
      position: "absolute",  
      marginLeft: 3,
      left: 27,
    },
    shareButton: {
      padding: 5,
      alignItems: "center",
      flexDirection: "row",
      borderColor: "red",
      borderWidth: 0, 
    },
    stretch: {
        width:"100%",
        height: 300,
        // height: '50%',
        resizeMode: 'cover',
        maxHeight: 400,                         
        // maxWidth: '100%',
        // position: 'relative',
        // aspectRatio: 1, // <-- this
        // resizeMode: 'contain', //optional
        // height: 'auto',
        // resizeMode: 'contain',
        // flex: 1,
        // aspectRatio: 1,
        // height: undefined,
      },
  });




