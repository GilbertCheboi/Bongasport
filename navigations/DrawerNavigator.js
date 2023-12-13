import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import CustomDrawerContent from '../components/CustomDrawerContent';
import TabNavigator from './TabNavigator';
// import Notification from '../screens/Notification';
// import GilscoreHome from '../screens/GilscoreHome';
import BaseballStack from './BaseballStack';
// import FootballStack from './FootballStack';
// import NBADetail from '../screens/NBADetail';
// import Formular1Stack from './Formular1Stack';
// import NFLStack from './NFLStack';
// import NBAStack from './NBAStack';
// import ProfileStack from './ProfileStack';


export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/> */}
      {/* <Drawer.Screen name="Football" component={TabNavigator} options={{ headerShown: false }}/>
      <Drawer.Screen name="NBA" component={NBAStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Formular 1" component={Formular1Stack} options={{ headerShown: false }} />
      <Drawer.Screen name="NFL" component={NFLStack} options={{ headerShown: false }} /> */}
      <Drawer.Screen name="Baseball" component={BaseballStack}  options={{ headerShown: false }}/>
      {/* <Drawer.Screen name="Profile" component={ProfileStack}  options={{ headerShown: false }}/> */}
    </Drawer.Navigator>
  )
}