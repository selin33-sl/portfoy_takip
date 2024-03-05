import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Header, LinearGradientContainer, VarliklarCard} from '../../components';
import style from './style';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {setAssetData} from '../../redux/slice/global/asset-data-slice';
import {
  getSearchCurrencyProcess,
  getSearchFundProcess,
  getSearchGoldProcess,
  getSearchStockProcess,
} from '../../api';

export const VarliklarScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchStockProcess({data: '', page: 1}));
    dispatch(getSearchCurrencyProcess({data: ''}));
    dispatch(getSearchGoldProcess({data: {searchParam: ''}}));
    dispatch(getSearchFundProcess({data: ''}));
  }, []);

  const {data: AllStockData} = useSelector(state => state.searchStock);

  const {data: AllCurrencyData} = useSelector(state => state.searchCurrency);
  const {data: AllGoldData} = useSelector(state => state.searchGold);
  const {data: AllFundData} = useSelector(state => state.searchFund);
  const {data: AssetData} = useSelector(state => state.assetData);

  const data = [
    {
      text: t('headers.assetsHeaders.turkisLira'),
      value: AllStockData,
      type: 'turkisLira',
      iconName: 'currency-try',
      backgroundColor: '#3401FF',
      _id: 1,
    },
    {
      text: t('headers.assetsHeaders.goldSilver'),
      value: AllGoldData,
      type: 'gold',
      iconName: 'gold',
      backgroundColor: '#FF7A00',
      _id: 2,
    },
    {
      text: t('headers.assetsHeaders.foreignCurrency'),
      iconName: 'money-symbol',
      value: AllCurrencyData,
      type: 'currency',
      backgroundColor: '#00EFFE',
      doviz: true,
      _id: 3,
    },
    {
      text: t('headers.assetsHeaders.fund'),
      iconName: 'file-multiple-outline',
      backgroundColor: '#FF007A',
      type: 'fund',
      value: AllFundData,
      _id: 4,
    },
    {
      text: t('headers.assetsHeaders.stock'),
      iconName: 'chart-line',
      value: AllStockData,
      type: 'stock',
      backgroundColor: '#BCFE00',
      _id: 5,
    },
    {
      text: t('headers.assetsHeaders.cryptoCurrrency'),
      iconName: 'currency-btc',
      backgroundColor: '#DB00FF',
      type: 'crypto',
      value: AllGoldData,
      _id: 6,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <VarliklarCard
        onPress={() => {
          navigation.navigate('varliklarList-screen', {
            text: item.text,
            value: item.value,
          });
          dispatch(setAssetData({data: item.value, type: item.type}));
        }}
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
