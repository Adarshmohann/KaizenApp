import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../theme/colors';
import SearchIcon from '../assets/svgs/searchIcon';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder = "Search", value, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#B0BCC7"
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.iconContainer}>
        <SearchIcon stroke="#B0BCC7" width={moderateScale(20)} height={moderateScale(20)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(25),
    paddingHorizontal: scale(20),
    height: moderateScale(50),
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: lightColor.black,
    height: '100%',
  },
  iconContainer: {
    marginLeft: scale(10),
  }
});

export default SearchBar;
