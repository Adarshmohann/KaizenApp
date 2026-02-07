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
import { LineChart, PieChart } from "react-native-gifted-charts";

const { width } = Dimensions.get('window');

const HomePage = () => {
  const styles = HomePageStyles();

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

  const renderGauge = () => {
  
    
    const totalPoints = maxScore - minScore;
    const progressPoints = currentScore - minScore;
    

    
    const segmentData = [
      { value: 24, color: '#FF5733' },
      { value: 1, color: 'transparent' },
      { value: 24, color: '#FFBD33' }, 
      { value: 1, color: 'transparent' },
      { value: 24, color: '#DCE775' },
      { value: 1, color: 'transparent' }, 
      { value: 24, color: '#F0F0F0' }, 
    ];

    return (
      <View style={styles.gaugeContainer}>
        <View style={{ width: moderateScale(200), height: moderateScale(110), alignItems: 'center', overflow: 'hidden' }}>
            <PieChart
                donut
                semiCircle
                data={segmentData}
                radius={moderateScale(95)}
                innerRadius={moderateScale(82)}
                innerCircleColor={'#ffffff'}
                backgroundColor={'transparent'}
            />
          
          <View style={{ position: 'absolute', top: verticalScale(25), alignItems: 'center' }}>
            <Text style={styles.scoreStatus}>Good</Text>
            <Text style={styles.scoreValue}>704</Text>
            <Text style={styles.ptsText}>+6pts</Text>
          </View>
        </View>

        
        <View style={[styles.scoreRange, { width: moderateScale(200) }]}>
            <Text style={styles.rangeText}>400</Text>
            <View style={styles.updateRow}>
                <CalendarIcon stroke="#BBB" width={14} height={14} style={{ marginRight: scale(4) }} />
                <Text style={styles.updateText}>update on 02 Oct 2024</Text>
            </View>
            <Text style={styles.rangeText}>850</Text>
        </View>
      </View>
    );
  };

  
  const currentScore = 704;
  const minScore = 400;
  const maxScore = 850;

  const renderActionItem = (title: string, color: string, Icon: React.FC<any>) => (
    <View style={styles.actionItem}>
        <TouchableOpacity 
            style={[styles.actionIconContainer, { backgroundColor: color + '15' }]}
            activeOpacity={0.7} 
        >
            <Icon stroke={color} width={22} height={22} />
        </TouchableOpacity>
        <Text style={styles.actionLabel}>{title}</Text>
    </View>
  )

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
              <NotificationIcon stroke={lightColor.black} width={22} height={22} />
            </TouchableOpacity>
          </View>

          
          <View style={styles.scoreCard}>
              {renderGauge()}
          </View>

          
          <View style={styles.actionCard}>
              <View style={styles.actionSection}>
                {renderActionItem("Pay\nMoney", "#346AFD", CardIcon)}
                {renderActionItem("Loan\nRequest", "#00BFA5", LoanIcon)}
                {renderActionItem("Chat\nSupport", "#FFAB40", ChatIcon)}
                {renderActionItem("Finance\nHub", "#7C4DFF", FinanceIcon)}
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
