import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import AppLayout from '../../../layouts/AppLayout';
import LoginPageStyles from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { lightColor } from '../../../theme/colors';
import Svg, { Path } from 'react-native-svg';
import FingerPrintIcon from '../../../assets/svgs/fingerprintIcon';
import CustomSwitch from '../../../components/CustomSwitch';

import { useAppDispatch } from '../../../utils/hooks';
import { setAuthenticated } from '../../../redux/slices/authSlice';

const LoginPage = () => {
    const styles = LoginPageStyles();
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        dispatch(setAuthenticated(true));
    };

    return (
        <AppLayout topColor={lightColor.white} bottomColor={lightColor.white} scrollable={true}>
            <View style={styles.container}>
                {/* Logo Section */}
                <View style={[styles.logoContainer,{}]}>
                   <Image
                     source={require('../../../assets/images/logo.png')} 
                        style={styles.logoImage} 
                        resizeMode="contain" 
                   />    
                </View>

                {/* Form Section */}
                <View style={styles.formContainer}>
                    <Text style={{ fontSize: 14, color: '#000', marginBottom: 8, fontWeight: '500' }}>
                        Phone Number<Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    
                    <View style={styles.phoneInputContainer}>
                        <TouchableOpacity 
                            style={styles.countryPickerButton}
                            activeOpacity={0.7}
                        >
                            <Image 
                                source={{ uri: 'https://flagcdn.com/w40/us.png' }} 
                                style={{ width: 24, height: 16, borderRadius: 2 }} 
                            />
                            <Text style={{ color: '#000', marginLeft: 8, fontSize: 16 }}>⌵</Text>
                        </TouchableOpacity>

                        <CustomTextInput
                            placeholder="Enter Your Phone Number"
                            keyboardType="phone-pad"
                            containerStyle={{ flex: 1, marginBottom: 0 }}
                        />
                    </View>

                    <CustomTextInput
                        label="First Name"
                        placeholder="Enter Your First Name"
                        required
                    />

                    <CustomTextInput
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        required
                    />

                    <CustomTextInput
                        label="Email Address"
                        placeholder="Enter Your Email"
                        keyboardType="email-address"
                        required
                    />

                    {/* Biometric Login */}
                    <TouchableOpacity style={styles.biometricContainer} activeOpacity={0.7}>
                       <FingerPrintIcon
                        height={20}
                        width={20}
                        stroke={lightColor.primary}
                       />
                        <Text style={styles.biometricText}>Use Biometric Login</Text>
                    </TouchableOpacity>

                    {/* Log In Button */}
                    <CustomButton
                        title="Log In"
                        onPress={handleLogin}
                        style={{ marginTop: 10 }}
                    />

                    {/* Keep me logged in */}
                    <View style={styles.keepLoggedContainer}>
                        <Text style={styles.keepLoggedText}>Keep me logged in</Text>
                        <CustomSwitch
                            value={keepLoggedIn}
                            onValueChange={setKeepLoggedIn}
                        />
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account ? </Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </AppLayout>
    );
};

export default LoginPage;
