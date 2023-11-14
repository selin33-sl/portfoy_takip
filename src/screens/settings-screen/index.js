import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Header, SettingsCard} from '../../components';
import style from './style';

export const SettingsScreen = () => {
  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={'AYARLAR'} />
      <View style={style.innerContainer}>
        <SettingsCard text={'Bildirimler'} />
        <SettingsCard text={'Destek'} />
        <SettingsCard text={'Kullanıcı Sözleşmesi ve Gizlilik Politikası'} />
        <SettingsCard text={'Yasal Uyarı'} />
        <SettingsCard text={'Uygulama Hakkında'} />
      </View>
    </LinearGradient>
  );
};
