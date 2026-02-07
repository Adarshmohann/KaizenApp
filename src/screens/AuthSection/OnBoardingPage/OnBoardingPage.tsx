import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import AppLayout from '../../../layouts/AppLayout';
import OnBoardingStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../../types/navigation';
import { lightColor } from '../../../theme/colors';

const OnBoardingPage = () => {
    const styles = OnBoardingStyles();
    const navigation = useNavigation<AuthNavigationProp<'OnBoardingPage'>>();

    return (
        <AppLayout topColor={lightColor.white} bottomColor={lightColor.white}>
            <View style={styles.container}>
                
                {/* Image Section - 70% height */}
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../../../assets/images/onBoardingImage.png')} 
                        style={styles.placeholderImage} 
                        resizeMode="contain"
                    />
                </View>

                {/* Content Section - 30% height */}
                <View style={styles.contentContainer}>
                    {/* Text Section (Title & Description) */}
                    <View style={styles.textSection}>
                        <Text style={styles.title}>Your Credit Score</Text>
                        <Text style={styles.description}>
                            We provide you with the tools to monitor, understand, and improve your credit score.
                        </Text>
                    </View>

                    {/* Button Section */}
                    <View style={styles.footer}>
                        <View style={styles.buttonOuterCircle}>
                            <TouchableOpacity 
                                style={styles.buttonContainer}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('LoginPage')}
                            >
                                <View style={styles.arrowIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        </AppLayout>
    );
};

export default OnBoardingPage;
