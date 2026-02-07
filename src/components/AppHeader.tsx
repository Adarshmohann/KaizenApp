import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../theme/colors';
import ChevronLeft from '../assets/svgs/chevronLeft';
import ChevronRight from '../assets/svgs/chevronRight';

interface AppHeaderProps {
  title: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  titleAlign?: 'left' | 'center';
}

const AppHeader = ({ 
  title, 
  onLeftPress, 
  onRightPress, 
  showLeftIcon = true, 
  showRightIcon = true,
  titleAlign = 'center'
}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {showLeftIcon && (
          <TouchableOpacity 
            onPress={onLeftPress} 
            style={styles.iconButton}
            activeOpacity={0.7}
          >
            <ChevronLeft stroke={lightColor.black} width={moderateScale(20)} height={moderateScale(20)} />
          </TouchableOpacity>
        )}
        {titleAlign === 'left' && <Text style={[styles.title, { marginLeft: scale(15) }]}>{title}</Text>}
      </View>
      
      {titleAlign === 'center' && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      
      <View style={styles.rightSection}>
        {showRightIcon && (
          <TouchableOpacity 
            onPress={onRightPress} 
            style={styles.iconButton}
            activeOpacity={0.7}
          >
            <ChevronRight stroke={lightColor.black} width={moderateScale(20)} height={moderateScale(20)} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightSection: {
    width: moderateScale(45),
    alignItems: 'flex-end',
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'none',
  },
  iconButton: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(15),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: lightColor.darkGray,
  },
});

export default AppHeader;
