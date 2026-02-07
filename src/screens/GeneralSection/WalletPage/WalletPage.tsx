import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '../../../layouts/AppLayout';
import { lightColor } from '../../../theme/colors';
import AppHeader from '../../../components/AppHeader';

import { useNavigation } from '@react-navigation/native';

const WalletPage = () => {
  const navigation = useNavigation<any>();

  return (
    <AppLayout topColor={lightColor.background} bottomColor={lightColor.background}>
      <View style={styles.container}>
        <AppHeader 
          title="Wallet" 
          titleAlign="left" 
          onLeftPress={() => navigation.navigate('History')}
          onRightPress={() => navigation.navigate('Profile')}
        />
        <View style={styles.content}>
          <Text style={styles.placeholderText}>Wallet Page</Text>
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
  }
});

export default WalletPage;
