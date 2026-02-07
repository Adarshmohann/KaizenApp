import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../theme/colors';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  containerStyle?: ViewStyle;
  error?: string;
  leftComponent?: React.ReactNode;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  required,
  containerStyle,
  error,
  leftComponent,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        {leftComponent && <View style={styles.leftComponent}>{leftComponent}</View>}
        <TextInput
          style={styles.input}
          placeholderTextColor="#999"
          {...rest}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(15),
    width: '100%',
  },
  label: {
    fontSize: moderateScale(14),
    color: lightColor.black,
    marginBottom: verticalScale(8),
    fontWeight: '500',
  },
  required: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: moderateScale(10),
    backgroundColor: '#fff',
    height: moderateScale(50),
    paddingHorizontal: scale(10),
  },
  inputError: {
    borderColor: 'red',
  },
  leftComponent: {
    marginRight: scale(10),
  },
  input: {
    flex: 1,
    height: '100%',
    color: lightColor.black,
    fontSize: moderateScale(14),
  },
  errorText: {
    color: 'red',
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
  },
});

export default CustomTextInput;
