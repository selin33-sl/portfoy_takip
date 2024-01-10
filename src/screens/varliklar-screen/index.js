import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Header, LinearGradientContainer, VarliklarCard} from '../../components';
import style from './style';
import {useTranslation} from 'react-i18next';

export const VarliklarScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const data = [
    {
      text: t('headers.assetsHeaders.turkisLira'),
      iconName: 'currency-try',
      backgroundColor: '#3401FF',
      _id: 1,
    },
    {
      text: t('headers.assetsHeaders.goldSilverCommodity'),
      iconName: 'gold',
      backgroundColor: '#FF7A00',
      _id: 2,
    },
    {
      text: t('headers.assetsHeaders.foreignCurrency'),
      iconName: 'money-symbol',
      backgroundColor: '#00EFFE',
      doviz: true,
      _id: 3,
    },
    {
      text: t('headers.assetsHeaders.fund'),
      iconName: 'file-multiple-outline',
      backgroundColor: '#FF007A',
      _id: 4,
    },
    {
      text: t('headers.assetsHeaders.stock'),
      iconName: 'chart-line',
      backgroundColor: '#BCFE00',
      _id: 5,
    },
    {
      text: t('headers.assetsHeaders.cryptoCurrrency'),
      iconName: 'currency-btc',
      backgroundColor: '#DB00FF',
      _id: 6,
    },
  ];

  const renderItem = ({item}) => {
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
    <LinearGradientContainer>
      <Header text={t('headers.assets')} backIcon={false} />
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
    </LinearGradientContainer>
  );
};
