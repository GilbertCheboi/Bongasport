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

import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {

  const {login} =useContext(AuthContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation =useNavigation();



  return (
    <View style={styles.container}>
      <Image style={styles.image}  />
 
      <StatusBar style="auto" />
      <Text style={styles.loginHeader} >Login</Text>

      <View style={styles.inputView}>
      <Icon name="at" size={20} />
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          keyboardType="email-address"
          placeholderTextColor="#333"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
      </View>
 
      <View style={styles.inputView}>
      <Icon name="lock" size={20} />
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#333"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{login(username, password)}}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View  style={styles.register}>
      <Text >New to Gilscore:  </Text>
      <TouchableOpacity onPress={ () => navigation.navigate('register')}>
      
        <Text style={styles.register_button}>Register</Text>
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
 
  forgot_button: {
    height: 30,
    marginBottom: 10,
    color: '#09899b',
    justifyContent: 'flex-end',
       // backgroundColor:'#ccc',
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



// const registerUser = () =>
//   fetch('https://run.mocky.io/v3/dd598227-c275-48e8-9840-c588293ead84', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       userName: 'jonaskuiler',
//     }),
//   }).then(response => response.json());

// const currentUser = token =>
//   fetch('https://run.mocky.io/v3/5910a865-8ebf-4fab-b27f-70f96551c5d4', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   }).then(result => result.json());

// // The app container, should handle the state of a user being authenticated or not
// export const AuthContainer = props => {
//   const [authState, dispatch] = useReducer(
//     (state, action) => {
//       switch (action.type) {
//         // Handle the AUTHENTICATED action and set the state to be authenticated
//         case AUTHENTICATED:
//           return {
//             ...state,
//             authenticated: true,
//           };
//         default:
//           throw new Error(`${action.type} is not a valid action type`);
//       }
//     },
//     {
//       authenticated: false,
//       initialized: false,
//     },
//   );

//   // Memoize this facade since it shouldn't be recreated every render
//   const facade = useMemo(
//     () => ({
//       register: async () => {
//         try {
//           const result = await registerUser();

//           console.log(`result`, result);

//           await EncryptedStorage.setItem(ACCESS_TOKEN_KEY, result.access_token);

//           dispatch({type: AUTHENTICATED});
//         } catch (error) {
//           console.error(error);
//         }
//       },

//       // First we're trying to fetch a token from encrypted storage here
//       // Then we try to get the user associated with that token and resume the session
//       resume: async () => {
//         try {
//           const token = await EncryptedStorage.getItem(ACCESS_TOKEN_KEY);

//           console.log(`token`, token);

//           // When no token is found, don't try to fetch the user
//           if (!token) {
//             return;
//           }

//           await currentUser(token);

//           dispatch({type: AUTHENTICATED});
//         } catch (error) {
//           console.error(error);
//         }
//       },
//     }),
//     [],
//   );

//   // This will trigger when the app is mounted for the first time
//   useEffect(() => {
//     facade.resume();
//   });

//   // This uses a render prop to pass the authState to the containers children
//   return (
//     <AuthContext.Provider value={facade}>
//       {props.children(authState)}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);