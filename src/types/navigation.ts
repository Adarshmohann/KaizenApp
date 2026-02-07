import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  OnBoardingPage: undefined;
  LoginPage: undefined;
};

export type MainStackParamList = {
  BottomNavigation: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Message: undefined;
  History: undefined;
  Wallet: undefined;
  Profile: undefined;
};

export type AuthNavigationProp<RouteName extends keyof AuthStackParamList> = NativeStackNavigationProp<
  AuthStackParamList,
  RouteName
>;

export type MainNavigationProp<RouteName extends keyof MainStackParamList> = NativeStackNavigationProp<
  MainStackParamList,
  RouteName
>;

export type BottomTabNavigationProp<RouteName extends keyof BottomTabParamList> = NativeStackNavigationProp<
  BottomTabParamList,
  RouteName
>;
