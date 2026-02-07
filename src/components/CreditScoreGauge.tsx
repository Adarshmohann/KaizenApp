import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, G, Mask } from 'react-native-svg';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import CalendarIcon from '../assets/svgs/calendarIcon';

interface CreditScoreGaugeProps {
  score: number;
  minScore?: number;
  maxScore?: number;
  statusText?: string;
  ptsChange?: string;
  updateDate?: string;
  type?: 'increment' | 'decrement';
}

const CreditScoreGauge: React.FC<CreditScoreGaugeProps> = ({
  score,
  minScore = 400,
  maxScore = 850,
  statusText = "Good",
  ptsChange = "+6pts",
  updateDate = "update on 02 Oct 2024",
  type
}) => {
  const radius = moderateScale(135);
  const strokeWidth = moderateScale(6);
  const width = radius * 2 + strokeWidth * 2 + moderateScale(30);
  const centerX = width / 2;
  const centerY = radius + strokeWidth + moderateScale(20);

  // Progress Calculation
  const totalRange = maxScore - minScore;
  const progress = Math.min(Math.max((score - minScore) / totalRange, 0), 1);

  const d = `M ${centerX - radius},${centerY} A ${radius},${radius} 0 0 1 ${centerX + radius},${centerY}`;
  const circumference = Math.PI * radius;

  const gap = moderateScale(14);
  const totalGapLength = gap * 3;
  const totalVisibleLength = circumference - totalGapLength;
  const s1 = totalVisibleLength * 0.4;
  const sOthers = totalVisibleLength * 0.2;
  const dashArray = `${s1} ${gap} ${sOthers} ${gap} ${sOthers} ${gap} ${sOthers}`;

  return (
    <View style={styles.container}>
      <View style={{ width, alignItems: 'center' }}>
        <Svg width={width} height={centerY + moderateScale(10)} viewBox={`0 0 ${width} ${centerY + moderateScale(10)}`}>
          <Defs>
            <LinearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#FF4D4D" />
              <Stop offset="50%" stopColor="#FFD93D" />
              <Stop offset="100%" stopColor="#6BCB77" />
            </LinearGradient>

            <Mask id="progressMask">
              <Path
                d={d}
                fill="none"
                stroke="white"
                strokeWidth={strokeWidth + moderateScale(10)} 
                strokeLinecap="round"
                // Using dasharray with start at 0 ensure full coverage of the rounded start cap
                strokeDasharray={`${circumference * progress} ${circumference * 2}`}
                strokeDashoffset={0}
              />
            </Mask>
          </Defs>

          {/* Background Layer (Grey segments) */}
          <Path
            d={d}
            fill="none"
            stroke="#F0F0F0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={dashArray}
            strokeDashoffset={0}
          />

          {/* Progress Layer (Colored segments) */}
          <G mask="url(#progressMask)">
            <Path
              d={d}
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={dashArray}
            />
          </G>
        </Svg>

        <View style={styles.textContainer}>
          <Text style={styles.statusText}>{statusText}</Text>
          <Text style={styles.scoreText}>{score}</Text>
          <Text style={[styles.ptsText, { color: type === 'decrement' ? '#ff4d4d' : '#4dce6e' }]}>{ptsChange}</Text>
        </View>

        <View style={[styles.footerRow, { width: radius * 2 + moderateScale(10) }]}>
          <Text style={styles.footerLabel}>{minScore}</Text>
          <View style={styles.updateWrapper}>
            <CalendarIcon stroke="#BBB" width={moderateScale(14)} height={moderateScale(14)} style={{ marginRight: scale(4) }} />
            <Text style={styles.updateText}>{updateDate}</Text>
          </View>
          <Text style={styles.footerLabel}>{maxScore}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -verticalScale(10),
  },
  textContainer: {
    position: 'absolute',
    top: moderateScale(45),
    alignItems: 'center',
  },
  statusText: {
    fontSize: moderateScale(15),
    color: '#9E9E9E',
    marginBottom: -verticalScale(5),
    fontWeight: '500',
  },
  scoreText: {
    fontSize: moderateScale(68),
    fontWeight: 'bold',
    color: '#2E3A59',
  },
  ptsText: {
    fontSize: moderateScale(16),
    color: '#4dce6e',
    fontWeight: '500',
    marginTop: -verticalScale(10),
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(2),
  },
  footerLabel: {
    fontSize: moderateScale(14),
    color: '#333',
    fontWeight: '600',
  },
  updateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  updateText: {
    fontSize: moderateScale(11),
    color: '#999',
    fontWeight: '500',
  },
});

export default CreditScoreGauge;
