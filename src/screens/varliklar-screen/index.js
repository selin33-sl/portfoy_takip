import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Header, VarliklarCard} from '../../components';
import style from './style';

export const VarliklarScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      text: 'Türk Lirası',
      iconName: 'currency-try',
      backgroundColor: '#3401FF',
      _id: 1,
    },
    {
      text: 'Altın | Gümüş',
      iconName: 'gold',
      backgroundColor: '#FF7A00',
      _id: 2,
    },
    {
      text: 'Döviz',
      iconName: 'money-symbol',
      backgroundColor: '#00EFFE',
      doviz: true,
      _id: 3,
    },
    {
      text: 'Fon',
      iconName: 'file-multiple-outline',
      backgroundColor: '#FF007A',
      _id: 4,
    },
    {
      text: 'Hisse Senedi',
      iconName: 'chart-line',
      backgroundColor: '#BCFE00',
      _id: 5,
    },
    {
      text: 'Kripto Para',
      iconName: 'currency-btc',
      backgroundColor: '#DB00FF',
      _id: 6,
    },
  ];

  const renderItem = ({item}) => {
    console.log(item.iconName);
    return (
      <VarliklarCard
        onPress={() =>
          navigation.navigate('varliklarList-screen', {text: item.text})
        }
        backgroundColor={item.backgroundColor}
        text={item.text}
        iconName={item.iconName.toString()}
        doviz={item?.doviz}
      />
    );
  };

  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={'VARLIKLAR'} backIcon={false} />
      <View style={style.innerContainer}>
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            horizontal={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
