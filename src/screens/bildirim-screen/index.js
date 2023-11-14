import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../components';
import style from './style';

export const BildirimScreen = () => {
  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={'BİLDİRİMLERİM'} />
      <View style={style.innerContainer}>
        <Text style={style.text}>Görüntülenecek bir bildirim bulunamadı.</Text>
      </View>
    </LinearGradient>
  );
};
