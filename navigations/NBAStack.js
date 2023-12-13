import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NBAScreen from '../screens/NBAScreen';
import NBADetail from '../screens/NBADetail';
import NBADetail1 from '../screens/NBADetail1';
import NBADetail2 from '../screens/NBADetail2';
import NBADetail3 from '../screens/NBADetail3'
import NBACreate from '../screens/NBACreate';
import ProfileScreen from '../screens/ProfileScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';
import EditProfile from '../screens/EditProfile';

export default function NBAStack() {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="NBA Home" component={NBAScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail NBA" component={NBADetail} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail1 NBA" component={NBADetail1} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail2 NBA" component={NBADetail2} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail3 NBA" component={NBADetail3} options={{ headerShown: false }}/>
        <Stack.Screen name="Create NBA" component={NBACreate} options={{ headerShown: false }}/>
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="edit_profile" component={EditProfile} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DetailsG" component={DetailGilscore} /> */}
      </Stack.Navigator>
  )
}