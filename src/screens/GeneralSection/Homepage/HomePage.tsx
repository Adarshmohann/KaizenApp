import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import AppLayout from '../../../layouts/AppLayout';
import HomePageStyles from './styles';
import { lightColor } from '../../../theme/colors';
import NotificationIcon from '../../../assets/svgs/notificationIcon';
import CardIcon from '../../../assets/svgs/cardIcon';
import LoanIcon from '../../../assets/svgs/loanIcon';
import ChatIcon from '../../../assets/svgs/chatIcon';
import FinanceIcon from '../../../assets/svgs/financeIcon';
import CalendarIcon from '../../../assets/svgs/calendarIcon';
import CreditScoreGauge from '../../../components/CreditScoreGauge';
import { LineChart } from "react-native-gifted-charts";
import chatSupportIcon from '../../../assets/svgs/chatSupportIcon';

const { width } = Dimensions.get('window');

const HomePage = () => {
  const styles = HomePageStyles();

  const currentScore = 730;
  const minScore = 400;
  const maxScore = 850;

  interface LineDataPoint {
    value: number;
    label: string;
  }

  const lineData: LineDataPoint[] = [
    { value: 650, label: 'Jan' },
    { value: 720, label: '' },
    { value: 680, label: 'Feb' },
    { value: 740, label: '' },
    { value: 660, label: 'Mar' },
    { value: 750, label: '' },
    { value: 700, label: 'Apr' },
    { value: 710, label: '' },
    { value: 680, label: 'May' },
    { value: 780, label: '' },
    { value: 720, label: 'Jun' },
    { value: 760, label: '' },
    { value: 740, label: 'Jul' },
  ];

  const actionData = [
    { id: 1, title: "Pay\nMoney", color: "#346AFD", icon: CardIcon },
    { id: 2, title: "Loan\nRequest", color: "#00BFA5", icon: LoanIcon },
    { id: 3, title: "Chat\nSupport", color: "#FFAB40", icon: chatSupportIcon },
    { id: 4, title: "Finance\nHub", color: "#7C4DFF", icon: FinanceIcon },
  ];

  const renderActionItem = (title: string, color: string, Icon: React.FC<any>, id: number) => {
    let iconWidth = moderateScale(22);
    let iconHeight = moderateScale(22);

    // Adjust specific icon sizes to look balanced since their stroke paths vary
    if (id === 1) iconHeight = moderateScale(18); // Card is wider than tall
    if (id === 2) iconWidth = moderateScale(19);  // Loan is taller than wide
    if (id === 3) iconHeight = moderateScale(21); // Chat is almost square
    if (id === 4) { iconWidth = moderateScale(21); iconHeight = moderateScale(21); } // Finance is square

    return (
      <View key={title} style={styles.actionItem}>
          <TouchableOpacity 
              style={[styles.actionIconContainer, { backgroundColor: color + '15' }]}
              activeOpacity={0.7} 
          >
              <Icon stroke={color} fill={color + '20'} width={iconWidth} height={iconHeight} />
          </TouchableOpacity>
          <Text style={styles.actionLabel}>{title}</Text>
      </View>
    );
  }

  return (
    <AppLayout topColor={lightColor.background} bottomColor={lightColor.background} scrollable={false}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          
        
          <View style={styles.header}>
            <View>
              <Text style={styles.greetingText}>Hi, Sarah</Text>
              <Text style={styles.subtitleText}>Your credit in excellent shape!</Text>
            </View>
            <TouchableOpacity style={styles.notificationContainer} activeOpacity={0.7}>
              <NotificationIcon stroke={lightColor.black} width={moderateScale(20)} height={moderateScale(20)} />
            </TouchableOpacity>
          </View>

          <View style={[styles.scoreCard, { paddingBottom: moderateScale(10) }]}>
              <CreditScoreGauge score={currentScore} />
          </View>

          <View style={styles.actionCard}>
              <View style={styles.actionSection}>
                  {actionData.map((item) => renderActionItem(item.title, item.color, item.icon, item.id))}
              </View>
          </View>

          
          <View style={styles.historySection}>
              <Text style={styles.sectionTitle}>Credit Score History</Text>
              <View style={styles.historyCard}>
                <LineChart
                    data={lineData}
                    height={verticalScale(140)}
                    width={width - scale(110)}
                    initialSpacing={scale(10)}
                    spacing={(width - scale(110)) / 12}
                    color={lightColor.primary}
                    thickness={3}
                    startFillColor={lightColor.primary}
                    endFillColor="rgba(52,106,253,0.01)"
                    startOpacity={0.2}
                    endOpacity={0.01}
                    noOfSections={4}
                    yAxisColor="transparent"
                    xAxisColor="#F0F0F0"
                    yAxisThickness={0}
                    xAxisThickness={1}
                    rulesColor="#F0F0F0"
                    rulesType="solid"
                    dataPointsColor={lightColor.primary}
                    curved
                    areaChart
                    yAxisTextStyle={{ color: '#BBB', fontSize: moderateScale(10) }}
                    xAxisLabelTextStyle={{ color: '#999', fontSize: moderateScale(10) }}
                    hideDataPoints
                    maxValue={850}
                />
              </View>
          </View>

        </ScrollView>
        
        
        <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity> 

      </View>
    </AppLayout> 
  );
};
 
export default HomePage; 
