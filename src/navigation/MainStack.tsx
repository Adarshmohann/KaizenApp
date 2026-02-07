import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../tabNavigators/BottomTabs';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator 
    screenOptions={{ 
        headerShown: false,
        animationDuration: 0.1,
        animation: "slide_from_right",
        gestureEnabled: true,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomTabs} />
    </Stack.Navigator>
  );
}
