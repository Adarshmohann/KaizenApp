import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/AuthSection/LoginPage/LoginPage';
import OnBoardingPage from '../screens/AuthSection/OnBoardingPage/OnBoardingPage';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
      initialRouteName="OnBoardingPage"
      screenOptions={{ 
        headerShown: false,
        animationDuration: 0.1,
        animation: "slide_from_right",
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="OnBoardingPage" component={OnBoardingPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}
