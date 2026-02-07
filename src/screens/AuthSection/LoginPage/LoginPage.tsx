import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import FingerPrintIcon from '../../../assets/svgs/fingerprintIcon';
import CustomButton from '../../../components/CustomButton';
import CustomSwitch from '../../../components/CustomSwitch';
import CustomTextInput from '../../../components/CustomTextInput';
import AppLayout from '../../../layouts/AppLayout';
import { lightColor } from '../../../theme/colors';
import LoginPageStyles from './styles';

const { height } = Dimensions.get('window');

import { setAuthenticated, setUser } from '../../../redux/slices/authSlice';
import { useAppDispatch } from '../../../utils/hooks';

import { Controller, useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const LoginPage = () => {
  const styles = LoginPageStyles();
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('+91');
  const [flag, setFlag] = useState('🇮🇳');
  const [show, setShow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: FormData) => {
    dispatch(
      setUser({
        id: '1',
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
      }),
    );
    dispatch(setAuthenticated(true));
  };

  const togglePicker = () => setShow(!show);

  return (
    <AppLayout
      topColor={lightColor.white}
      bottomColor={lightColor.white}
      scrollable={true}
      behaviour={'padding'}
    >
      <View style={styles.container}>
        <View style={[styles.logoContainer, {}]}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={[styles.formContainer, {}]}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              marginBottom: 8,
              fontWeight: '500',
            }}
          >
            Phone Number<Text style={{ color: 'red' }}>*</Text>
          </Text>

          <View style={[styles.phoneInputContainer, {}]}>
            <TouchableOpacity
              style={styles.countryPickerButton}
              activeOpacity={0.7}
              onPress={togglePicker}
            >
              <Text style={{ fontSize: moderateScale(20) }}>{flag}</Text>
              <Text
                style={{
                  color: '#000',
                  marginLeft: moderateScale(4),
                  fontSize: 16,
                }}
              >
                {callingCode}
              </Text>
              <Text style={{ color: '#000', marginLeft: 8, fontSize: 16 }}>
                ⌵
              </Text>

              <CountryPicker
                show={show}
                lang={'en'}
                pickerButtonOnPress={item => {
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

            <View style={{ flex: 1 }}>
              <Controller
                control={control}
                rules={{
                  required: 'Phone Number is required',
                  minLength: {
                    value: 10,
                    message: 'Phone Number must be at least 10 digits',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextInput
                    placeholder="Enter Your Phone Number"
                    keyboardType="phone-pad"
                    containerStyle={{ marginBottom: verticalScale(15) }}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={errors.phoneNumber?.message}
                  />
                )}
                name="phoneNumber"
              />
            </View>
          </View>

          <Controller
            control={control}
            rules={{
              required: 'First Name is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                label="First Name"
                placeholder="Enter Your First Name"
                required
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.firstName?.message}
              />
            )}
            name="firstName"
          />

          <Controller
            control={control}
            rules={{
              required: 'Last Name is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                label="Last Name"
                placeholder="Enter Your Last Name"
                required
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.lastName?.message}
              />
            )}
            name="lastName"
          />

          <Controller
            control={control}
            rules={{
              required: 'Email Address is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Email Address is invalid',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                label="Email Address"
                placeholder="Enter Your Email"
                keyboardType="email-address"
                required
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
            name="email"
          />

          <TouchableOpacity
            style={[styles.biometricContainer, {}]}
            activeOpacity={0.7}
          >
            <FingerPrintIcon
              height={20}
              width={20}
              stroke={lightColor.primary}
            />
            <Text style={styles.biometricText}>Use Biometric Login</Text>
          </TouchableOpacity>

          <CustomButton
            title="Log In"
            onPress={handleSubmit(onSubmit)}
            style={{ marginTop: 10 }}
          />

          <View style={styles.keepLoggedContainer}>
            <Text style={styles.keepLoggedText}>Keep me logged in</Text>
            <CustomSwitch
              value={keepLoggedIn}
              onValueChange={setKeepLoggedIn}
            />
          </View>

          <View style={[styles.footer, {}]}>
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
