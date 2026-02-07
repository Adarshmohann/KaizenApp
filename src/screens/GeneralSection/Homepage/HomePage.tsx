import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import CardIcon from '../../../assets/svgs/cardIcon';
import chatSupportIcon from '../../../assets/svgs/chatSupportIcon';
import FinanceIcon from '../../../assets/svgs/financeIcon';
import LoanIcon from '../../../assets/svgs/loanIcon';
import NotificationIcon from '../../../assets/svgs/notificationIcon';
import CreditScoreGauge from '../../../components/CreditScoreGauge';
import AppLayout from '../../../layouts/AppLayout';
import { lightColor } from '../../../theme/colors';
import HomePageStyles from './styles';
import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { RootState } from '../../../redux/store';

const { width } = Dimensions.get('window');

const HomePage = () => {
  const styles = HomePageStyles();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.userData);

  const creditScoreHistory = useAppSelector(
    (state: RootState) => state.creditData.history,
  );

  const Y_AXIS_OFFSET = 650;
  const lineChartData = creditScoreHistory?.map(item => ({
    label: item?.label,
    value: item?.score,
  }));
  const latestScoreData = creditScoreHistory[creditScoreHistory.length - 1];

  const [currentScore, setCurrentScore] = useState(latestScoreData.score);
  const [currentStatus, setCurrentStatus] = useState(latestScoreData.status);
  const [ptsChange, setPtsChange] = useState(
    `${latestScoreData.changeFromPrevious > 0 ? '+' : ''}${
      latestScoreData.changeFromPrevious
    } pts`,
  );
  const [updateDate, setUpdateDate] = useState(
    `Updated on ${latestScoreData.updatedAt}`,
  );

  const [currentType, setCurrentType] = useState<'increment' | 'decrement'>(
    latestScoreData.type as 'increment' | 'decrement',
  );

  const actionData = [
    { id: 1, title: 'Pay\nMoney', color: '#346AFD', icon: CardIcon },
    { id: 2, title: 'Loan\nRequest', color: '#00BFA5', icon: LoanIcon },
    { id: 3, title: 'Chat\nSupport', color: '#FFAB40', icon: chatSupportIcon },
    { id: 4, title: 'Finance\nHub', color: '#6b5bff', icon: FinanceIcon },
  ];

  const renderActionItem = (
    title: string,
    color: string,
    Icon: React.FC<any>,
    id: number,
  ) => {
    let iconWidth = moderateScale(22);
    let iconHeight = moderateScale(22);

    if (id === 1) iconHeight = moderateScale(18);
    if (id === 2) iconWidth = moderateScale(19);
    if (id === 3) iconHeight = moderateScale(21);
    if (id === 4) {
      iconWidth = moderateScale(21);
      iconHeight = moderateScale(21);
    } // Finance is square

    return (
      <View key={title} style={styles.actionItem}>
        <TouchableOpacity
          style={[
            styles.actionIconContainer,
            { backgroundColor: color + '15' },
          ]}
          activeOpacity={0.7}
        >
          <Icon
            stroke={color}
            fill={color + '20'}
            width={iconWidth}
            height={iconHeight}
          />
        </TouchableOpacity>
        <Text style={styles.actionLabel}>{title}</Text>
      </View>
    );
  };

  return (
    <AppLayout
      topColor={lightColor.background}
      bottomColor={lightColor.background}
      scrollable={false}
    >
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: scale(20) }}
        >
          <View style={styles.header}>
            <View>
              <Text
                style={styles.greetingText}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                Hi, {user?.firstName}
              </Text>
              <Text style={styles.subtitleText}>
                Your credit in excellent shape!
              </Text>
            </View>
            <TouchableOpacity
              style={styles.notificationContainer}
              activeOpacity={0.7}
            >
              <NotificationIcon
                stroke={lightColor.black}
                width={moderateScale(20)}
                height={moderateScale(20)}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.scoreCard, { paddingBottom: moderateScale(10) }]}
          >
            <CreditScoreGauge
              score={currentScore}
              statusText={currentStatus}
              ptsChange={ptsChange}
              updateDate={updateDate}
              type={currentType}
            />
          </View>

          <View style={styles.actionCard}>
            <View style={styles.actionSection}>
              {actionData.map(item =>
                renderActionItem(item.title, item.color, item.icon, item.id),
              )}
            </View>
          </View>

          <View style={styles.historySection}>
            <Text style={styles.sectionTitle}>Credit Score History</Text>
            <View style={styles.historyCard}>
              <LineChart
                data={lineChartData}
                height={verticalScale(140)}
                width={width - scale(110)}
                initialSpacing={scale(20)}
                spacing={scale(30)}
                color={lightColor.primary}
                thickness={3}
                noOfSections={4}
                stepValue={50}
                yAxisOffset={650}
                yAxisColor="transparent"
                xAxisColor="#F0F0F0"
                yAxisThickness={0}
                xAxisThickness={1}
                rulesColor="#F0F0F0"
                rulesType="solid"
                curved
                yAxisTextStyle={{ color: '#BBB', fontSize: moderateScale(10) }}
                xAxisLabelTextStyle={{
                  color: '#999',
                  fontSize: moderateScale(10),
                }}
                dataPointsColor={lightColor.primary}
                dataPointsRadius={moderateScale(5)}
                focusEnabled
                showDataPointOnFocus
                showStripOnFocus
                stripColor={lightColor.primary + '40'}
                onFocus={(item: any, index: number) => {
                  const actualScore = item.value + Y_AXIS_OFFSET;
                  const selected = creditScoreHistory[index];

                  setCurrentScore(actualScore);
                  setCurrentStatus(selected.status);
                  setPtsChange(
                    `${selected.changeFromPrevious > 0 ? '+' : ''}${
                      selected.changeFromPrevious
                    } pts`,
                  );
                  setUpdateDate(`Updated on ${selected.updatedAt}`);
                  setCurrentType(selected.type as 'increment' | 'decrement');
                }}
              />
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.fab}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    </AppLayout>
  );
};

export default HomePage;
