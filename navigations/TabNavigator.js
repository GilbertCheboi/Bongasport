import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Home from '../screens/Home';
import Notification from '../screens/Notification';
// import SettingsScreen from '../screens/SettingsScreen';

import BaseballStack from './BaseballStack';
// import FootballStack from './FootballStack';
// import ProfileScreen from '../screens/ProfileScreen';
import MyVideoPlayer from '../screens/videos/MyVideoPlayer';




export default function TabNavigator() {
    
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
        <Tab.Screen name="Milan" component={BaseballStack} options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ), }} />
        <Tab.Screen name="Notifications" component={Notification}
        options= {{
          headerShown: true,
          tabBarBadge: 6,
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Videos" component={MyVideoPlayer}
        options= {{
          headerShown: true,
          // tabBarBadge: 6,
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color }) => (
            <Icon name="video" color={color} size={26} />
          ),
        }} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}/> */}
      </Tab.Navigator>
  )
}