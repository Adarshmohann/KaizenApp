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

const { width } = Dimensions.get('window');

const CustomBottomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurWrapper}
        blurType="light"
        blurAmount={80} // Increased blur amount
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
              const color = isFocused ? lightColor.primary : '#4E5F7E';
              const fill = isFocused ? lightColor.primary : 'none';
              const size = moderateScale(24);
              
              switch(route.name) {
                case 'Home': return <HomeIcon stroke={color} width={size} height={size} fill={fill} />;
                case 'Message': return <ChatIcon stroke={color} width={size} height={size} fill={fill} />;
                case 'History': return <StatsIcon stroke={color} width={size} height={size} fill={fill} />;
                case 'Wallet': return <WalletIcon stroke={color} width={size} height={size} fill={fill} />;
                case 'Profile': return (
                    <View style={[styles.avatarContainer, isFocused && styles.activeAvatar]}>
                        <Image 
                            source={{ uri: 'https://i.pravatar.cc/100?img=32' }} 
                            style={styles.avatar} 
                        />
                    </View>
                );
                default: return <HomeIcon stroke={color} width={size} height={size} fill={fill} />;
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
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: verticalScale(20),
    left: scale(20),
    right: scale(20),
    height: moderateScale(75),
    borderRadius: moderateScale(40),
    zIndex: 100,
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
