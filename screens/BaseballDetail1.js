import { Text,FlatList,TextInput, Alert, Button, View, StyleSheet,TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native'
import React, { Component, useState,useEffect, useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../context/AuthContext';
import { Card } from 'react-native-paper';

export default function BaseballDetail1(props) {

  const import_data = props.route.params.data;
  const id = import_data.id
  const [liked, setLiked] = useState(false);
  const [content, setContent] = useState([]) ;
  const [data, setData] = useState([]) ;
  const [loading, setLoading] = useState(true);
  const {userToken, userInfo} = useContext(AuthContext);



  const loadComment = () => { 
    fetch(`https://gilscore.azurewebsites.net/api/Baseball/tweetcomments1/${id}/`, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json',

        'Authorization': 'Token ' + userToken
      }
     }) 
     .then(resp => resp.json())
     .then(data => {
        setData(data)
        console.log(data)
        setLoading(false)
     })
     .catch(error =>
      console.log(error, 'Error'))

  // const loadComment = () => { 
  //   fetch(`https://gilscore.azurewebsites.net/api/Europa/tweetscomments/${id}/`, {
  //     method: 'GET',
  //     headers:{
  //       'Authorization': 'Token ' + userToken
  //     }
  //    }) 
  //    .then(resp => resp.json())
  //    .then(comment => {
  //     console.log(comment)
  //       setData(comment.results)
  //       setLoading(false)
  //    })
  //    .catch(error => Alert.alert('Error Get', error.message))
   }

  useEffect(() => {
     loadComment();
    }, [])

    const clickedItem = (data) => { 
      props.navigation.navigate('Detail2 Baseball',{data:data}) }
      const clickedProfile = (data) => { 
        props.navigation.navigate('otherprofile',{data:data}) }

    const createLoad =() => {
      const fomdata = new FormData();
      fomdata.append('comment', id);
      fomdata.append('content', content);
      //data.append('image', image);
        fetch('https://gilscore.azurewebsites.net/api/Baseball/commentweet1/', {
        method: 'POST',
        headers: {
          'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
            // 'Content-Type':'application/x-www-form-urlencoder',
            'Authorization': 'Token ' + userToken
        },
          // body: createFormData(content, {userId: userInfo.user.id})
           body: fomdata,
          // body: 'id: id
      })
      .then(resp => resp.json())
      .then(created => { 
        console.log(created)
        Alert.alert('comment succesful')
        setLoading (true)
        //props.navigation.navigate('Football Home')
      })
      .catch(error=> Alert.alert('Error', error.message))
    }


    // const data= {content:content}
    
    // const createLoad =() => {
    //   fetch(`https://gilscore.azurewebsites.net/api/Europa/tweetscomments/${id}/`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type':'application/json'
    //     },
    //       body: JSON.stringify(data)
    //   })
    //   .then(resp => resp.json())
    //   .then(created => { 
    //     console.log(created)
    //     props.navigation.navigate('Football Home')
    //   })
    //   .catch(error=> Alert.alert('Error', error.message))
    // }
   
    

    const renderComment = (item) => {  

      return(
          <Card   onPress= {() => clickedItem(item)}    >
                         
            <View style={styles.background}>
            <View style={styles.containerComment}>
              <View style={styles.innerContainer}>
                <View style={styles.innerHeaderContainer}>
                  <View style={styles.photoContainer}>
                    <View style={styles.innerPhotoContainer}>
                      <TouchableOpacity onPress={ () => clickedProfile(item)}>
                      <Image
                        style={styles.photoComment}
                        source={{uri: item.user.image}}/>
                      </TouchableOpacity>
                    </View>
                  </View>              
                  <View style={styles.infoComment}>
                    <View style={styles.userDetailsComment}>
                      <Text style={styles.userNameComment}>{item.user.First_Name} {item.user.Last_Name}
                        <Text style={styles.userHandleAndTimeComment}>  @{item.user.username} {item.timestamp}   {}</Text>
                        
                      </Text>
                    </View>
                  </View>
                  <View style={styles.innerClubContainer}>
                      <TouchableOpacity>
                      <Image
                        style={styles.photoComment}
                        source={{uri: item.user.Baseball}}/>
                      </TouchableOpacity>
                  </View> 
                  
                </View>
                <View style={styles.BodyContainer}>
                <View style={styles.tweetBodyContainer}>
                  <View style={styles.tweetTextContainer}>
                    <Text style={styles.tweetCText}> {item.content}</Text>
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
                      <View style = {styles.iconContainer}>
                      <View>
                      <Icon name="message-reply-text" style={styles.commentButtonIcon} size={16} color={'#8899a6'} />
                      </View>
                      <Text style = {styles.iconContainerText}>Comment</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.retweetButton}>
                    <View style = {styles.iconContainer}>
                      <View>
                      <Icon name="repeat" size={16} color={'#8899a6'} />
                      </View>
                      <Text style = {styles.iconContainerText}>Repost</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.likeButton} onPress={() => likeAction()}>
                    <View style = {styles.iconContainer}>
                      <View>
                    <Icon name="heart-outline" size = {16} color={'#8899a6'}/>
                      </View>
                      <Text style = {styles.iconContainerText}>Like</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton}>
                    <View style = {styles.iconContainer}>
                      {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                      <Icon name="share-variant" size={16} color={'#8899a6'} />
                      <Text style = {styles.iconContainerText}>Share</Text>
                      </View>

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
  // const CommentDelete = (data) =>{
  //   fetch(`http://192.168.25.107:8000/api/predictions/commentfeed${data.id}/`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':'aplication/json'
  //     }
  //   })
  // }

  return (
  
                           
  <ScrollView style={styles.background}>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerHeaderContainer}>
          <View style={styles.photoContainer}>
            <View style={styles.innerPhotoContainer}>
              <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{uri: import_data.user.image}}/>
              </TouchableOpacity>
            </View>
          </View>              
          <View style={styles.info}>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{import_data.user.First_Name} {import_data.user.Last_Name}
              <Text style={styles.userHandleAndTime}>  @{import_data.user.username}</Text></Text>
              <Text style={styles.userHandleAndTime}>{import_data.timestamp}</Text>
            </View>
          </View>
          <View style={styles.innerClubContainer}>
              <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{uri: import_data.user.Baseball}}/>
              </TouchableOpacity>
          </View> 
          
        </View>
        <View style={styles.BodyContainer}>
          <View style={styles.tweetBodyContainer}>
            <View style={styles.tweetTextContainer}>
              <Text style={styles.tweetText}> {import_data.content}</Text>
            </View>
            <View>
              <Image
                style={styles.stretch}
                source={{uri: import_data.image}}
              />
            </View>
            <View>
            <View style={styles.commentLikeContainer}>
                  <Text style={styles.commentsCount}>{import_data.total_comments} Comments</Text>
                  <Text style={[styles.retweetButtonIcon, {color:"#8899a6",}]}>2 Reposts</Text> 
                  <Text style={[styles.likeButtonIcon, {color:"#8899a6"}]}>{import_data.likes} Likes</Text>
                  </View>
            <View style={styles.tweetActionsContainer}>
                    <TouchableOpacity style={styles.commentButton}>
                      <View style = {styles.iconContainer}>
                      <View>
                      <Icon name="message-reply-text" style={styles.commentButtonIcon} size={16} color={'#8899a6'} />
                      </View>
                      <Text style = {styles.iconContainerText}>Comment</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.retweetButton}>
                    <View style = {styles.iconContainer}>
                      <View>
                      <Icon name="repeat" size={16} color={'#8899a6'} />
                      </View>
                      <Text style = {styles.iconContainerText}>Repost</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.likeButton} onPress={() => likeAction()}>
                    <View style = {styles.iconContainer}>
                      <View>
                    <Icon name="heart-outline" size = {16} color={'#8899a6'}/>
                      </View>
                      <Text style = {styles.iconContainerText}>Like</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton}>
                    <View style = {styles.iconContainer}>
                      {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                      <Icon name="share-variant" size={16} color={'#8899a6'} />
                      <Text style = {styles.iconContainerText}>Share</Text>
                      </View>

                    </TouchableOpacity>
                  </View>
            </View>                  
          </View>
        </View>
      </View>   
      <View style={styles.comment}>
        <TextInput style={styles.input}
          // label="comment"
          value={content}
          mode= 'outlined'
          multiline
          placeholder="Comment"
          numberOfLines={3}
          onChangeText={content=> setContent(content)}
        />  
        <View style={{flexDirection: 'column', marginTop: 10}}>
        <TouchableOpacity style={styles.commentButton} onPress={() => createLoad()}>
            {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
            <Icon name="send" size={20} color={'rgb(136, 153, 166)'} />
        </TouchableOpacity>     
        <TouchableOpacity style={styles.commentButton} onPress={() => selectFile()}>
            {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
            <Icon name="image" size={20} color={'rgb(136, 153, 166)'} />
        </TouchableOpacity>     
        </View>
        </View>
        {/* <View> 
         <Button title="Pick an image from camera roll" onPress={selectFile} />
        {imageUp && <Image source={{ uri:imageUp }} style={{ width: 200, height: 200 }} />}
        </View> */}
       
      <FlatList         
          data={data}
          renderItem={({ item }) => {
              return renderComment(item)
          }}
            refreshing={loading}
            onRefresh={loadComment}
          keyExtractor={(item) => `${item.id}`}
        />
    </View>
          
  </ScrollView>

)
}


const styles = StyleSheet.create({
  background:{
    backgroundColor: '#DCDCDC',
    flex: 1,
  }, 
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    borderBottomColor: "black",
    // borderBottomWidth: 2,
    paddingBottom:10,
    paddingTop: 5,
    marginTop:5,
    marginBottom: 10,
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
    // marginBottom: 10,
    // marginTop: 10,
    // borderWidth: 1,
  },
  innerHeaderContainer: { 
    // backgroundColor: '#FFf',
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    // alignItems:'center',
    // borderColor: "black",
    // borderWidth: 1,
    // borderBottomWidth: 1,
    flexDirection:'row',
    marginLeft: 10,
    marginRight: 10,
    // borderRightWidth: 1
    // borderLeftWidth: 1,
    // justifyContent: 'space-between',
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
    marginBottom: 10,
    marginTop: 10,
    // borderLeftWidth: 1
  },

  // innerHeaderContainer: { 
  //   // backgroundColor: '#FFf',
  //   // backgroundColor: '#B6D0E2',
  //   // borderRadius: 10,
  //   // alignItems:'center',
  //   borderColor: "#09899b",
  //   // borderWidth: 1,
  //   // borderBottomWidth: 1,
  //   flexDirection:'row',
  //   marginLeft: 10,
  //   marginRight: 10,
  //   paddingBottom: 5,
  //   borderBottomWidth: 0.2,
  //   // borderLeftWidth: 1,
  //   // justifyContent: 'space-between',
  // },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // marginTop: 15
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
    flexDirection: "column",
    // borderWidth: 1,
    marginBottom: 0,
    // marginTop: 10,
    marginLeft: 10,
  },
  userName: { color: "black", fontWeight: "bold", fontSize:16, },
  userHandleAndTime: {
    color: "rgb(136, 153, 166)",
    fontWeight: "bold",
    // color: "#09899b",
    fontSize:15,
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
  tweetText: { color: "black", paddingRight: 10, fontSize:18,  },
  tweetCText: { color: "black", paddingRight: 10, fontSize:16,  },
  tweetActionsContainer: {
    borderColor: "blue",
    borderWidth: 0,
    marginTop: 5,
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: 'space-between',
    borderColor: "#09899b",
    borderTopWidth: 0.3,
    width:"90%",
  },
  commentLikeContainer: {
    flexDirection: "row",
    padding: 10,
    marginTop: 5,
    justifyContent: 'space-between',
  },
  commentButton: {
    paddingLeft: 0,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: "center" ,
  },
  iconContainerText: {
    color: "#A9A9A9",
    paddingRight: 10,
    fontSize: 12,
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
    fontSize:12,
    color:"#8899a6",
  },
  retweetButton: {
    // padding: 5,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  retweetButtonIcon: {
    fontSize:12,  
  },
  likeButton: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  likeButtonIcon: {
    fontSize:12,
  },
  shareButton: {
    // padding: 5,
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
      maxHeight: 500,                         
      // maxWidth: '100%',
      // position: 'relative',
      // aspectRatio: 1, // <-- this
      // resizeMode: 'contain', //optional
      // height: 'auto',
      // resizeMode: 'contain',
      flex: 1,
      // aspectRatio: 1,
      // height: undefined,
    },
    input:{
    //   // margin: 10,
    //   borderColor: "red",
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
    //   borderWidth: 2,
    //   position: "absolute",
      marginLeft: 10,
    width: '80%',
    //   flex: 1,
      padding:10,
    //   alignItems: 'center',
    //   justifyContent: 'center',
      marginTop: 10,
    //   // marginBottom: 100,
    },
    comment:{
      // position: 'relative',
      // borderWidth: 2,
      borderColor: 'red',
      flexDirection: "row",
      // left: 0, 
      // right: 0,
      // bottom: 0,
      // height: '90%',
      marginBottom: 10,
    },
    commentButton:{
      marginTop: 5,
      margin: 5,
    },





    // comments render comments
    containerComment: {
      borderBottomColor: "black",
      // borderBottomWidth: 2,
      paddingBottom:10,
      paddingTop: 5,
      marginTop:3,
      marginBottom: 3,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginLeft: 7.5,
      marginRight: 7.5,
      // flexDirection: "column",
    },
    photoComment: {
      width: 40,
      height: 40,
      borderRadius: 40,
      // marginTop: 15
    },
    infoComment: {
      width:'50%',
      // flex: 0.77,
      borderColor: "yellow",
      // flexDirection: "column",
      borderWidth: 0
    },
    userDetailsComment: {
      borderColor: "blue",
      // borderWidth: 1,
      marginBottom: 0,
      // marginTop: 10,
      marginLeft: 10,
    },
    userNameComment: {
      color: "black",
      fontWeight: "bold",
      fontSize:14, 
    },
    userHandleAndTimeComment: {
      fontWeight: "bold",
      color: "#A9A9A9",
      fontSize: 14,
      marginLeft: 5,
      fontStyle: 'italic',
    }
})