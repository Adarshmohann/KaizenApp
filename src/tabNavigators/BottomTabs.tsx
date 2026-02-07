import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/GeneralSection/Homepage/HomePage';
import MessagePage from '../screens/GeneralSection/MessagePage/MessagePage';
import HistoryPage from '../screens/GeneralSection/HistoryPage/HistoryPage';
import WalletPage from '../screens/GeneralSection/WalletPage/WalletPage';
import ProfilePage from '../screens/GeneralSection/ProfilePage/ProfilePage';
import CustomBottomTab from './CustomBottomTab';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name} Screen</Text>
  </View>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Message" component={MessagePage} />
      <Tab.Screen name="History" component={HistoryPage} />
      <Tab.Screen name="Wallet" component={WalletPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}
