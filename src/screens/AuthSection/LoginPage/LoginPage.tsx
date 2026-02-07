import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import { moderateScale } from 'react-native-size-matters';
import FingerPrintIcon from '../../../assets/svgs/fingerprintIcon';
import CustomButton from '../../../components/CustomButton';
import CustomSwitch from '../../../components/CustomSwitch';
import CustomTextInput from '../../../components/CustomTextInput';
import AppLayout from '../../../layouts/AppLayout';
import { lightColor } from '../../../theme/colors';
import LoginPageStyles from './styles';

const { height } = Dimensions.get('window');

import { setAuthenticated } from '../../../redux/slices/authSlice';
import { useAppDispatch } from '../../../utils/hooks';

const LoginPage = () => {
    const styles = LoginPageStyles();
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [countryCode, setCountryCode] = useState('US');
    const [callingCode, setCallingCode] = useState('+1');
    const [flag, setFlag] = useState('🇺🇸');
    const [show, setShow] = useState(false);
    
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        dispatch(setAuthenticated(true));
    };

    const togglePicker = () => setShow(!show);

    return (
        <AppLayout 
        topColor={lightColor.white} 
        bottomColor={lightColor.white} 
        scrollable={true}
        behaviour={"padding"}
        >
            <View style={styles.container}>
                
                <View style={[styles.logoContainer,{}]}>
                   <Image
                     source={require('../../../assets/images/logo.png')} 
                        style={styles.logoImage} 
                        resizeMode="contain" 
                   />    
                </View>

               
                <View style={[styles.formContainer,{}]}>
                    <Text style={{ fontSize: 14, color: '#000', marginBottom: 8, fontWeight: '500' }}>
                        Phone Number<Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    
                    <View style={styles.phoneInputContainer}>
                        <TouchableOpacity 
                            style={styles.countryPickerButton}
                            activeOpacity={0.7}
                            onPress={togglePicker}
                        >
                            <Text style={{ fontSize: moderateScale(20) }}>{flag}</Text>
                            <Text style={{ color: '#000', marginLeft: moderateScale(4), fontSize: 16 }}>{callingCode}</Text>
                            <Text style={{ color: '#000', marginLeft: 8, fontSize: 16 }}>⌵</Text>

                            <CountryPicker
                                show={show}
                                lang={'en'}
                                pickerButtonOnPress={(item) => {
                                    setCountryCode(item.code);
                                    setCallingCode(item.dial_code);
                                    setFlag(item.flag);
                                    setShow(false);
                                }}
                                onBackdropPress={() => setShow(false)}
                                onRequestClose={() => setShow(false)}
                                style={{
                                    modal: {
                                        height: height / 2,
                                    },
                                }}
                            />
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

                   
                    <TouchableOpacity style={[styles.biometricContainer,{}]} activeOpacity={0.7}>
                       <FingerPrintIcon
                        height={20}
                        width={20}
                        stroke={lightColor.primary}
                       />
                        <Text style={styles.biometricText}>Use Biometric Login</Text>
                    </TouchableOpacity>

                    
                    <CustomButton
                        title="Log In"
                        onPress={handleLogin}
                        style={{ marginTop: 10 }}
                    />

                    
                    <View style={styles.keepLoggedContainer}>
                        <Text style={styles.keepLoggedText}>Keep me logged in</Text>
                        <CustomSwitch
                            value={keepLoggedIn}
                            onValueChange={setKeepLoggedIn}
                        />
                    </View>

                   
                    <View style={[styles.footer,{}]}>
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
