import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Header, VarliklarCard} from '../../components';
import style from './style';

export const VarliklarScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={'VARLIKLAR'} backIcon={false} />
      <View style={style.innerContainer}>
        <VarliklarCard
          onPress={() =>
            navigation.navigate('varliklarList-screen', {text: 'Türk Lirası'})
          }
          backgroundColor={'#3401FF'}
          text={'Türk Lirası'}
          iconName={'currency-try'}
        />
        <VarliklarCard
          onPress={() =>
            navigation.navigate('varliklarList-screen', {text: 'Altın | Gümüş'})
          }
          backgroundColor={'#FF7A00'}
          text={'Altın | Gümüş'}
          iconName={'gold'}
        />
        <VarliklarCard
          onPress={() =>
            navigation.navigate('varliklarList-screen', {text: 'Döviz'})
          }
          backgroundColor={'#00EFFE'}
          text={'Döviz'}
          doviz={true}
          iconName={'money-symbol'}
        />
        <VarliklarCard
          onPress={() =>
            navigation.navigate('varliklarList-screen', {text: 'Fon'})
          }
          backgroundColor={'#FF007A'}
          text={'Fon'}
          iconName={'file-multiple-outline'}
        />
        <VarliklarCard
          onPress={() =>
            navigation.navigate('varliklarList-screen', {text: 'Hisse Senedi'})
          }
          backgroundColor={'#BCFE00'}
          text={'Hisse Senedi'}
          iconName={'chart-line'}
        />
        <VarliklarCard
          onPress={() =>
            navigation.navigate('varliklarList-screen', {text: 'Kripto Para'})
          }
          backgroundColor={'#DB00FF'}
          text={'Kripto Para'}
          iconName={'currency-btc'}
        />
      </View>
    </LinearGradient>
  );
};
