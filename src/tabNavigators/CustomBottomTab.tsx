import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform, Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../theme/colors';
import HomeIcon from '../assets/svgs/homeIcon';
import ChatIcon from '../assets/svgs/chatIcon';
import StatsIcon from '../assets/svgs/statsIcon';
import WalletIcon from '../assets/svgs/walletIcon';
import { BlurView } from '@react-native-community/blur';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const CustomBottomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {

  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.outerWrapper, { paddingBottom: Math.max(insets.bottom, verticalScale(15)) }]}>
        <View style={styles.container}>
          <BlurView
            style={styles.blurWrapper}
            blurType="light"
            blurAmount={80} 
            reducedTransparencyFallbackColor="white"
          />
          <View style={styles.tabBar}>
            {state.routes.map((route, index: number) => {
              const { options } = descriptors[route.key];
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const Icon = () => {
              const activeColor = lightColor.primary;
              const inactiveColor = '#9BA5B7';
              const isProfile = route.name === 'Profile';

              if (isProfile) {
                return (
                  <View style={[styles.avatarContainer, isFocused && styles.activeAvatar]}>
                    <Image 
                      source={require('../assets/images/profileImage.png')} 
                      style={styles.avatar} 
                    />
                  </View>
                );
              }

              const iconColor = isFocused ? activeColor : inactiveColor;
              const iconFill = isFocused ? activeColor : 'none';
              
              switch(route.name) {
                case 'Home': 
                  return <HomeIcon stroke={iconColor} fill={iconFill} width={moderateScale(24)} height={moderateScale(24)} />;
                case 'Message': 
                  return <ChatIcon stroke={iconColor} fill={iconFill} width={moderateScale(22)} height={moderateScale(22)} />;
                case 'History': 
                  
                  return <StatsIcon stroke={iconColor} width={moderateScale(24)} height={moderateScale(24)} />;
                case 'Wallet': 
                  
                  return <WalletIcon stroke={iconColor} width={moderateScale(22)} height={moderateScale(20)} />;
                default: 
                  return <HomeIcon stroke={iconColor} width={moderateScale(24)} height={moderateScale(24)} />;
              }
          }

              return (
                <TouchableOpacity
                  key={index}
                  onPress={onPress}
                  style={styles.tabItem}
                  activeOpacity={0.7}
                >
                  <View style={styles.iconWrapper}>
                    <Icon />
                    {isFocused && route.name !== 'Profile' && (
                      <Text style={styles.activeLabel}>{route.name}</Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: scale(20),
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  container: {
    height: moderateScale(75),
    borderRadius: moderateScale(40),
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    overflow: 'hidden',
  },
  blurWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  tabBar: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLabel: {
    fontSize: moderateScale(11),
    color: lightColor.primary,
    fontWeight: '700',
    marginTop: verticalScale(4),
  },
  avatarContainer: {
      width: moderateScale(38),
      height: moderateScale(38),
      borderRadius: moderateScale(19),
      overflow: 'hidden',
  },
  activeAvatar: {
      borderWidth: 2,
      borderColor: lightColor.primary,
  },
  avatar: {
      width: '100%',
      height: '100%',
  }
});

export default CustomBottomTab;
