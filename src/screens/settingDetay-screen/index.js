import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Header} from '../../components';
import style from './style';
import {useRoute} from '@react-navigation/native';

export const SettingDetayScreen = () => {
  const route = useRoute();
  const {header} = route.params;
  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={header} backIcon={true} />
      <View style={style.innerContainer}>
        <Text style={style.text}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Text>
      </View>
    </LinearGradient>
  );
};
