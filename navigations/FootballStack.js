import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FootballScreen from '../screens/FootballScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';
import FootballCreate from '../screens/FootballCreate';
import FootballDetail from '../screens/FootballDetail';
import FootballDetail1 from '../screens/FootballDetail1';
import FootballDetail2 from '../screens/FootballDetail2';
import FootballDetail3 from '../screens/FootballDetail3';
import OthersProfileScreen from '../screens/OthersProfileScreen';


export default function FootballStack() {
  const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="Football Home" component={FootballScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail Football" component={FootballDetail}options={{ headerMode: 'float' }} />
        <Stack.Screen name="Detail1 Football" component={FootballDetail1}options={{ headerMode: 'float' }} />
        <Stack.Screen name="Detail2 Football" component={FootballDetail2}options={{ headerMode: 'float' }} />
        <Stack.Screen name="Detail3 Football" component={FootballDetail3}options={{ headerMode: 'float' }} />
        <Stack.Screen name="Create Football" component={FootballCreate} options={{ headerShown: false }}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Edit" component={EditProfile} options={{ headerShown: false }}/> */}
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="edit_profile" component={EditProfile}/>
      </Stack.Navigator>
  )
}