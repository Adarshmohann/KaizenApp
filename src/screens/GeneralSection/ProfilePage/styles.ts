import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../../../theme/colors';

const ProfilePageStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: lightColor.background,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: moderateScale(35),
      borderTopRightRadius: moderateScale(35),
      marginTop: verticalScale(10),
      paddingTop: verticalScale(30),
    },
    scrollContent: {
      paddingHorizontal: scale(25),
      paddingBottom: verticalScale(100),
    },
    profileImageContainer: {
      alignItems: 'center',
      marginBottom: verticalScale(20),
    },
    imageWrapper: {
      width: moderateScale(130),
      height: moderateScale(130),
      borderRadius: moderateScale(65),
      borderWidth: 3,
      borderColor: lightColor.primary,
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(5),
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: moderateScale(60),
    },
    userName: {
      fontSize: moderateScale(22),
      fontWeight: '600',
      color: lightColor.darkGray,
      marginTop: verticalScale(10),
    },
    infoSection: {
      marginTop: verticalScale(20),
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(20),
    },
    iconContainer: {
      width: moderateScale(45),
      height: moderateScale(45),
      borderRadius: moderateScale(22.5),
      backgroundColor: '#EEF2FF',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: scale(15),
    },
    infoTextContainer: {
      flex: 1,
    },
    infoLabel: {
      fontSize: moderateScale(14),
      fontWeight: '600',
      color: lightColor.darkGray,
    },
    infoValue: {
      fontSize: moderateScale(12),
      color: '#B0BCC7',
      marginTop: verticalScale(2),
    },
    sectionDivider: {
      marginTop: verticalScale(10),
      marginBottom: verticalScale(20),
    },
    sectionTitle: {
      fontSize: moderateScale(16),
      fontWeight: '600',
      color: lightColor.darkGray,
      marginBottom: verticalScale(15),
    },
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(20),
    },
    settingTextContainer: {
      flex: 1,
      marginLeft: scale(15),
    },
    settingLabel: {
      fontSize: moderateScale(15),
      fontWeight: '600',
      color: lightColor.darkGray,
    },
    settingSubtext: {
      fontSize: moderateScale(11),
      color: '#B0BCC7',
      marginTop: verticalScale(2),
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: moderateScale(20),
      padding: moderateScale(20),
      alignItems: 'center',
      elevation: 5,
    },
    modalTitle: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      marginBottom: verticalScale(10),
      color: lightColor.black,
    },
    modalMessage: {
      fontSize: moderateScale(14),
      color: lightColor.gray,
      textAlign: 'center',
      marginBottom: verticalScale(20),
    },
    modalButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    modalButton: {
      flex: 1,
      paddingVertical: verticalScale(10),
      borderRadius: moderateScale(10),
      alignItems: 'center',
      marginHorizontal: scale(5),
    },
    cancelButton: {
      backgroundColor: '#f0f0f0',
    },
    logoutButton: {
      backgroundColor: '#FF4D4D',
    },
    cancelButtonText: {
      fontSize: moderateScale(14),
      fontWeight: '600',
      color: lightColor.black,
    },
    logoutButtonText: {
      fontSize: moderateScale(14),
      fontWeight: '600',
      color: 'white',
    },
  });
};

export default ProfilePageStyles;
