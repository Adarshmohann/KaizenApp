import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../../../theme/colors';

const OnBoardingStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: lightColor.white,
    },
    imageContainer: {
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    placeholderImage: {
      width: '100%',
      height: '100%',
    },
    contentContainer: {
      height: '30%',
      paddingHorizontal: scale(20),
      justifyContent: 'space-between',
      paddingBottom: verticalScale(20),
    },
    textSection: {
      marginTop: verticalScale(10),
    },
    title: {
      fontSize: moderateScale(30),
      fontWeight: 'bold',
      color: lightColor.black,
    },
    description: {
      fontSize: moderateScale(15),
      color: lightColor.subText,
      lineHeight: moderateScale(22),
      marginTop: verticalScale(8),
      width: '90%',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonContainer: {
      width: moderateScale(54),
      height: moderateScale(54),
      borderRadius: moderateScale(27),
      backgroundColor: lightColor.primary,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: lightColor.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    buttonOuterCircle: {
        width: moderateScale(66),
        height: moderateScale(66),
        borderRadius: moderateScale(33),
        borderWidth: 1.5,
        borderColor: lightColor.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowIcon: {
      width: moderateScale(12),
      height: moderateScale(12),
      borderTopWidth: 2.5,
      borderRightWidth: 2.5,
      borderColor: lightColor.white,
      transform: [{ rotate: '45deg' }],
      marginLeft: -moderateScale(3),
    },
  });
};

export default OnBoardingStyles;
