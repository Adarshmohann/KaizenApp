import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../../../theme/colors';

const HomePageStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: lightColor.background,
      paddingHorizontal: scale(20),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: verticalScale(20),
      marginBottom: verticalScale(20),
    },
    greetingText: {
      fontSize: moderateScale(22),
      fontWeight: 'bold',
      color: lightColor.black,
    },
    subtitleText: {
      fontSize: moderateScale(13),
      color: '#999',
      marginTop: verticalScale(2),
    },
    notificationContainer: {
      width: moderateScale(45),
      height: moderateScale(45),
      borderRadius: moderateScale(15),
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    scoreCard: {
      backgroundColor: '#fff',
      borderRadius: moderateScale(25),
      padding: moderateScale(20),
      alignItems: 'center',
      marginBottom: verticalScale(20),
    },
    gaugeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    scoreValue: {
      fontSize: moderateScale(42),
      fontWeight: 'bold',
      color: '#2E3A59',
    },
    scoreStatus: {
      fontSize: moderateScale(13),
      color: '#999',
      marginBottom: verticalScale(5),
    },
    ptsText: {
      fontSize: moderateScale(13),
      color: '#4CAF50',
      fontWeight: '600',
      marginTop: verticalScale(5),
    },
    scoreRange: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(10),
    },
    rangeText: {
      fontSize: moderateScale(12),
      color: '#333',
      fontWeight: '500',
    },
    updateRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    updateText: {
        fontSize: moderateScale(11),
        color: '#999',
    },
    actionCard: {
        backgroundColor: '#fff',
        borderRadius: moderateScale(25),
        padding: moderateScale(15),
        paddingHorizontal: scale(5),
        marginBottom: verticalScale(25),
    },
    actionSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    actionItem: {
        alignItems: 'center',
        width: '24%',
    },
    actionIconContainer: {
        width: moderateScale(48),
        height: moderateScale(48),
        borderRadius: moderateScale(24),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(8),
    },
    actionLabel: {
        fontSize: moderateScale(10),
        color: '#666',
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: moderateScale(12),
    },
    historySection: {
        marginBottom: verticalScale(120),
    },
    sectionTitle: {
      fontSize: moderateScale(16),
      fontWeight: 'bold',
      color: lightColor.black,
      marginBottom: verticalScale(12),
    },
    historyCard: {
        backgroundColor: '#fff',
        borderRadius: moderateScale(25),
        padding: moderateScale(20),
    },
    fab: {
        position: 'absolute',
        bottom: verticalScale(80),
        right: scale(20),
        width: moderateScale(56),
        height: moderateScale(56),
        borderRadius: moderateScale(28),
        backgroundColor: lightColor.primary,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    fabText: {
        fontSize: moderateScale(30),
        color: '#fff',
        marginTop: -3,
    }
  });
};

export default HomePageStyles;
