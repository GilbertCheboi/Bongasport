import { NavigationContainer } from '@react-navigation/native';
import React, {useContext, createContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import AuthStack from './AuthStack';
import DrawerNavigator from './DrawerNavigator';



export default function AppNav () {
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading) {
       return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'}/>
        </View>
       );
    }

  return (
    <NavigationContainer>
       {userToken !== null ? <DrawerNavigator/> :<AuthStack/> }
    </NavigationContainer>
  )
}