import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  Animated,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { lightColor } from '../theme/colors';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
  style?: ViewStyle;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
  activeColor = lightColor.primary,
  inactiveColor = '#E8E8E8',
  style,
}) => {
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, moderateScale(22)], 
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveColor, activeColor],
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onValueChange(!value)}
      style={[style]}
    >
      <Animated.View
        style={[
          styles.container,
          { backgroundColor },
        ]}
      >
        <Animated.View
          style={[
            styles.circle,
            { transform: [{ translateX }] },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(48),
    height: moderateScale(28),
    borderRadius: moderateScale(14),
    padding: 2,
    justifyContent: 'center',
  },
  circle: {
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(11),
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default CustomSwitch;
