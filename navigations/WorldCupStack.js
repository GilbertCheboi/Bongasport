import { View, Text } from 'react-native'
import React from 'react'
import { BaseballFeedComponent } from '../Baseball/components';


export default function WorldCupStack() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="World Cup" component={BaseballFeedComponent} options={{ headerShown: true }}/>
      {/* <Stack.Screen name="Details" component={DetailWorldCup} /> */}
      {/* <Stack.Screen name="Create world cup" component={CreateWorldCup} /> */}
    </Stack.Navigator>
  )
}