import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Header, LinearGradientContainer} from '../../../components';
import style from './style';
import {useRoute} from '@react-navigation/native';
import jsonData from '../../../assets/data/data.json';
import {useTranslation} from 'react-i18next';

export const SettingDetayScreen = () => {
  const {t} = useTranslation();
  const route = useRoute();
  const {header} = route.params;

  const text =
    header === t('headers.settingsHeaders.support')
      ? jsonData.destek
      : header === t('headers.settingsHeaders.legalWarning')
      ? jsonData.yasalUyari
      : header === t('headers.settingsHeaders.policy')
      ? jsonData.kullaniciSozlesmesi
      : '';
  return (
    <LinearGradientContainer>
      <Header text={header} backIcon={true} />
      <View style={style.innerContainer}>
        <Text style={style.text}>{text}</Text>
      </View>
    </LinearGradientContainer>
  );
};
