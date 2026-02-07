import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { lightColor } from '../../../theme/colors';

const { width } = Dimensions.get('window');

const MessagePageStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: lightColor.background,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: verticalScale(15),
      marginBottom: verticalScale(8),
    },
    sectionTitle: {
      fontSize: moderateScale(16),
      fontWeight: '600',
      color: lightColor.darkGray,
    },
    sectionDate: {
      fontSize: moderateScale(12),
      color: '#999',
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: moderateScale(35),
      borderTopRightRadius: moderateScale(35),
      marginTop: verticalScale(10),
    },
    messageList: {
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(180), 
    },
    messageCard: {
      backgroundColor: '#fff',
      borderRadius: moderateScale(25),
      padding: moderateScale(20),
      marginBottom: verticalScale(15),
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.05)',
    },
    avatarContainer: {
      width: moderateScale(55),
      height: moderateScale(55),
      borderRadius: moderateScale(27.5),
      backgroundColor: '#f0f0f0',
      overflow: 'hidden',
    },
    avatar: {
      width: '100%',
      height: '100%',
    },
    contentContainer: {
      flex: 1,
      marginLeft: scale(15),
    },
    nameRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      fontSize: moderateScale(15),
      fontWeight: '600',
      color: lightColor.darkGray,
    },
    statusDot: {
      width: moderateScale(10),
      height: moderateScale(10),
      borderRadius: moderateScale(5),
    },
    messageText: {
      fontSize: moderateScale(13),
      color: '#B0BCC7',
      marginTop: verticalScale(4),
      lineHeight: moderateScale(18),
    },
    timeText: {
      fontSize: moderateScale(11),
      color: '#B0BCC7',
      marginTop: verticalScale(10),
      textAlign: 'right',
    },
    startChatButton: {
      position: 'absolute',
      bottom: verticalScale(80), 
      alignSelf: 'center',
      width: width - scale(80), 
      backgroundColor: lightColor.primary,
      height: moderateScale(55),
      borderRadius: moderateScale(15),
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    startChatText: {
      color: '#fff',
      fontSize: moderateScale(16),
      fontWeight: '600',
    },
    dateLabel: {
        fontSize: moderateScale(12),
        color: '#999',
        marginTop: verticalScale(10),
        marginBottom: verticalScale(15),
    }
  });
};

export default MessagePageStyles;
