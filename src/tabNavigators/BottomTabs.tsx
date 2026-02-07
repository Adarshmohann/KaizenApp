import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HistoryPage from '../screens/GeneralSection/HistoryPage/HistoryPage';
import HomePage from '../screens/GeneralSection/Homepage/HomePage';
import MessagePage from '../screens/GeneralSection/MessagePage/MessagePage';
import ProfilePage from '../screens/GeneralSection/ProfilePage/ProfilePage';
import WalletPage from '../screens/GeneralSection/WalletPage/WalletPage';
import CustomBottomTab from './CustomBottomTab';

const Tab = createBottomTabNavigator();



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
