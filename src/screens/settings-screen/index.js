import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Header, SettingsCard} from '../../components';
import style from './style';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={'AYARLAR'} />
      <View style={style.innerContainer}>
        <SettingsCard text={'Bildirimler'} />
        <SettingsCard
          text={'Destek'}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {header: 'Destek'})
          }
        />
        <SettingsCard
          text={'Kullanıcı Sözleşmesi ve Gizlilik Politikası'}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {
              header: 'Kullanıcı Sözleşmesi ve Gizlilik Politikası',
            })
          }
        />
        <SettingsCard
          text={'Yasal Uyarı'}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {header: 'Yasal Uyarı'})
          }
        />
        <SettingsCard text={'Uygulama Hakkında'} />
      </View>
    </LinearGradient>
  );
};
