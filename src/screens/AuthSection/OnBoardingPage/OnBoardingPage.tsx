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
                
                
                <View style={[styles.imageContainer,{}]}>
                    <Image 
                        source={require('../../../assets/images/onBoardingImage.png')} 
                        style={styles.placeholderImage} 
                        resizeMode="contain"
                    />
                </View>

               
                <View style={styles.contentContainer}>
                    
                    <View style={styles.textSection}>
                        <Text style={styles.title}>Your Credit Score</Text>
                        <Text style={styles.description}>
                            We provide you with the tools to monitor, understand, and improve your credit score.
                        </Text>
                    </View>

                    
                    <View style={[styles.footer,{}]}>
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
