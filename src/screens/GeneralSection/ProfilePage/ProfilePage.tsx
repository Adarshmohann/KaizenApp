import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, Modal } from 'react-native';
import AppLayout from '../../../layouts/AppLayout';
import { lightColor } from '../../../theme/colors';
import AppHeader from '../../../components/AppHeader';
import CustomSwitch from '../../../components/CustomSwitch';
import ProfilePageStyles from './styles';
import MailIcon from '../../../assets/svgs/mailIcon';
import PhoneIcon from '../../../assets/svgs/phoneIcon';
import SmileIcon from '../../../assets/svgs/smileIcon';
import FingerprintIcon from '../../../assets/svgs/fingerprintIcon';
import MoonIcon from '../../../assets/svgs/moonIcon';
import CalendarIcon from '../../../assets/svgs/calendarIcon';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { RootState } from '../../../redux/store';
import { setAuthenticated } from '../../../redux/slices/authSlice';
import CustomButton from '../../../components/CustomButton';

interface InfoItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const ProfilePage = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const styles = ProfilePageStyles();
  const [faceIdEnabled, setFaceIdEnabled] = useState<boolean>(false);
  const [fingerprintEnabled, setFingerprintEnabled] = useState<boolean>(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

  const { user } = useAppSelector((state: RootState) => state.userData);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    dispatch(setAuthenticated(false));
  };

  const infoItems: InfoItem[] = [
    {
      label: 'Email',
      value: user?.email || '',
      icon: <MailIcon stroke={lightColor.primary} width={20} height={20} />,
    },
    {
      label: 'Phone',
      value: user?.phoneNumber || '',
      icon: <PhoneIcon stroke={lightColor.primary} width={20} height={20} />,
    },
    {
      label: 'DOB',
      value: '12 Dec 2001',
      icon: <CalendarIcon stroke={lightColor.primary} width={20} height={20} />,
    },
  ];

  return (
    <AppLayout 
    topColor={lightColor.background} 
    bottomColor={lightColor.background} 
    behaviour={null}>
      <View style={[styles.container,{}]}>
        <AppHeader 
          title="Profile" 
          titleAlign="left" 
          onLeftPress={() => navigation.navigate('Wallet')}
          onRightPress={() => navigation.navigate('Home')}
        />

        <View style={[styles.contentWrapper,{}]}>
          <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}>
            
            
            <View style={styles.profileImageContainer}>
              <View style={styles.imageWrapper}>
                <Image 
                  source={require('../../../assets/images/profileImage.png')} 
                  style={styles.profileImage} 
                />
              </View>
              <Text style={styles.userName}>{user ? `${user.firstName} ${user.lastName}` : 'User'}</Text>
            </View>

            
            <View style={styles.infoSection}>
              {infoItems?.map((item, index) => (
                <View key={index} style={styles.infoItem}>
                  <View style={styles.iconContainer}>
                    {item.icon}
                  </View>
                  <View style={styles.infoTextContainer}>
                    <Text style={styles.infoLabel}>{item.label}</Text>
                    <Text style={styles.infoValue}>{item.value}</Text>
                  </View>
                </View>
              ))}
            </View>

            
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionTitle}>Security</Text>
              
              <View style={styles.settingItem}>
                <View style={styles.iconContainer}>
                  <SmileIcon stroke={lightColor.primary} width={20} height={20} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingLabel}>Face ID</Text>
                  <Text style={styles.settingSubtext}>Use Face ID to unlock the app</Text>
                </View>
                <CustomSwitch 
                  value={faceIdEnabled} 
                  onValueChange={setFaceIdEnabled} 
                />
              </View>

              <View style={styles.settingItem}>
                <View style={styles.iconContainer}>
                  <FingerprintIcon stroke={lightColor.primary} width={20} height={20} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingLabel}>Fingerprint</Text>
                  <Text style={styles.settingSubtext}>Use Fingerprint to unlock the app</Text>
                </View>
                <CustomSwitch 
                  value={fingerprintEnabled} 
                  onValueChange={setFingerprintEnabled} 
                />
              </View>
            </View>

           
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionTitle}>Appearance</Text>
              
              <View style={styles.settingItem}>
                <View style={styles.iconContainer}>
                  <MoonIcon stroke={lightColor.primary} width={20} height={20} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingLabel}>Dark Mode</Text>
                  <Text style={styles.settingSubtext}>Enable dark mode theme</Text>
                </View>
                <CustomSwitch 
                  value={darkModeEnabled} 
                  onValueChange={setDarkModeEnabled} 
                />
              </View>
            </View>

            <CustomButton 
              title="Logout" 
              onPress={handleLogout}
              style={{ marginTop: 20, backgroundColor: '#FF4D4D' }}
            />

          </ScrollView>
        </View>

        <Modal
          visible={showLogoutModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowLogoutModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Logout</Text>
              <Text style={styles.modalMessage}>Are you sure you want to logout?</Text>
              
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity 
                  style={[styles.modalButton, styles.cancelButton]} 
                  onPress={() => setShowLogoutModal(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.modalButton, styles.logoutButton]} 
                  onPress={confirmLogout}
                >
                  <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </AppLayout>
  );
};

export default ProfilePage;
