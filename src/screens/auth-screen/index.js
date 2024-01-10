import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import style from './style';
import {
  LinearGradientContainer,
  PatternDesign,
  TextinputCard,
} from '../../components';
import {images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

export const AuthScreen = () => {
  const {t} = useTranslation();

  const navigation = useNavigation();
  const [register, setRegister] = useState(false);

  const handleRegisterScreen = () => {
    setRegister(!register);
  };

  const handlerLogin = () => {
    navigation.navigate('bottom-tabs');
  };

  const handlerRegister = () => {
    setRegister(false);
  };

  return (
    <LinearGradientContainer>
      <View style={style.innerContainer}>
        <View style={style.firstContainer}>
          <PatternDesign />
          {/* <Image source={images.donutchart} style={style.image} /> */}
        </View>

        <View style={style.secondContainer}>
          <View style={style.headerContainer}>
            <Text style={style.headerText}>
              {register
                ? t('registerScreen.description')
                : `${t('loginScreen.welcome')}\n${t('common.login')}`}
            </Text>
          </View>

          <View style={style.subTitleContainer}>
            <Text style={style.subTitle}>
              {register
                ? t('registerScreen.question')
                : t('loginScreen.question')}
            </Text>
            <TouchableOpacity onPress={handleRegisterScreen}>
              <Text style={style.optionText}>
                {register ? t('common.login') : t('common.register')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.inputContainer}>
            {register ? (
              <TextinputCard
                placeholder={t('registerScreen.userName')}
                name={'account'}
              />
            ) : null}

            <TextinputCard
              placeholder={'Email'}
              name={'email-outline'}
              keyboardType={'email-address'}
            />
            <TextinputCard
              placeholder={t('common.password')}
              name={'lock-outline'}
            />

            {register ? (
              <TextinputCard
                placeholder={t('registerScreen.repeatPasword')}
                name={'lock-outline'}
              />
            ) : null}
          </View>
          <TouchableOpacity
            style={style.buttonContainer}
            onPress={register ? handlerRegister : handlerLogin}>
            <Text style={style.buttonText}>
              {register ? t('common.register') : t('common.login')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradientContainer>
  );
};
