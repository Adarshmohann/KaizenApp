import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../../../theme/colors';

const LoginPageStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: lightColor.white,
      paddingHorizontal: scale(20),
    },
    logoContainer: {
      height: verticalScale(140),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(20),
    },
    logoImage: {
      width: '65%',
      height: '65%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tagline: {
      fontSize: moderateScale(18),
      color: lightColor.primary,
      fontWeight: '600',
      marginTop: verticalScale(10),
    },
    formContainer: {
      marginTop: verticalScale(10),
    },
    phoneInputContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: '100%',
    },
    countryPickerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: moderateScale(10),
      height: moderateScale(50),
      paddingHorizontal: scale(10),
      marginRight: scale(10),
    },
    biometricContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: verticalScale(15),
    },
    biometricText: {
      fontSize: moderateScale(12),
      color: '#666',
      marginLeft: scale(8),
    },
    keepLoggedContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: verticalScale(15),
    },
    keepLoggedText: {
      fontSize: moderateScale(14),
      color: '#666',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: verticalScale(30),
      marginBottom: verticalScale(20),
    },
    footerText: {
      fontSize: moderateScale(14),
      color: '#666',
    },
    signUpText: {
      fontSize: moderateScale(14),
      color: lightColor.primary,
      fontWeight: '600',
    },
  });
};

export default LoginPageStyles;
