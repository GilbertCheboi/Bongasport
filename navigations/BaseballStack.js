import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BaseballScreen from '../screens/BaseballScreen';
import BaseballDetail from '../screens/BaseballDetail';
import BaseballDetail1 from '../screens/BaseballDetail1';
import BaseballDetail2 from '../screens/BaseballDetail2';
import BaseballDetail3 from '../screens/BaseballDetail3';
import BaseballCreate from '../screens/BaseballCreate';
import ProfileScreen from '../screens/ProfileScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';
import EditProfile from '../screens/EditProfile';

export default function BaseballStack() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name="Baseball Home" component={BaseballScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Create Baseball" component={BaseballCreate} options={{headerShown: false}} />
        <Stack.Screen name="Detail Baseball" component={BaseballDetail} options={{headerShown: false}} />
        <Stack.Screen name="Detail1 Baseball" component={BaseballDetail1} options={{headerShown: false}} />
        <Stack.Screen name="Detail2 Baseball" component={BaseballDetail2} options={{headerShown: false}} />
        <Stack.Screen name="Detail3 Baseball" component={BaseballDetail3} options={{headerShown: false}} />
        <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="edit_profile" component={EditProfile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    )
  }