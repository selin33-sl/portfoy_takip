import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Header, LinearGradientContainer, VarliklarCard} from '../../components';
import style from './style';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {setAssetData} from '../../redux/slice/global/asset-data-slice';
import {
  getBudgetDetailsProcess,
  getSearchCryptoProcess,
  getSearchCurrencyProcess,
  getSearchFundProcess,
  getSearchGoldProcess,
  getSearchStockProcess,
} from '../../api';

export const VarliklarScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      console.log('oldu muuuu');
      dispatch(getSearchStockProcess({data: '', page: 1}));
      dispatch(getSearchCurrencyProcess({data: '', page: 1}));
      dispatch(getSearchCryptoProcess({data: '', page: 1}));
      dispatch(getSearchGoldProcess({data: {searchParam: ''}, page: 1}));
      dispatch(getSearchFundProcess({data: '', page: 1}));
    }, []),
  );
  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);
  const {data: SearchStockData} = useSelector(state => state.searchStock);
  const {data: SearchCurrencyData} = useSelector(state => state.searchCurrency);
  const {data: SearchCryptoData} = useSelector(state => state.searchCrypto);
  const {data: SearchGoldData} = useSelector(state => state.searchGold);
  const {data: SearchFundData} = useSelector(state => state.searchFund);
  const {data: AssetData} = useSelector(state => state.assetData);

  console.log('SearchCryptoData', SearchCryptoData);
  const data = [
    {
      text: t('headers.assetsHeaders.turkisLira'),
      value: SearchStockData,
      type: 'turkisLira',
      iconName: 'currency-try',
      backgroundColor: '#3401FF',
      screen: 'budget-screen',
      _id: 1,
    },
    {
      text: t('headers.assetsHeaders.goldSilver'),
      value: SearchGoldData,
      type: 'gold',
      iconName: 'gold',
      backgroundColor: '#FF7A00',
      screen: 'varliklarList-screen',
      _id: 2,
    },
    {
      text: t('headers.assetsHeaders.foreignCurrency'),
      iconName: 'money-symbol',
      value: SearchCurrencyData,
      type: 'currency',
      backgroundColor: '#00EFFE',
      doviz: true,
      screen: 'varliklarList-screen',
      _id: 3,
    },
    {
      text: t('headers.assetsHeaders.fund'),
      iconName: 'file-multiple-outline',
      backgroundColor: '#FF007A',
      type: 'fund',
      value: SearchFundData,
      screen: 'varliklarList-screen',
      _id: 4,
    },
    {
      text: t('headers.assetsHeaders.stock'),
      iconName: 'chart-line',
      value: SearchStockData,
      type: 'stock',
      backgroundColor: '#BCFE00',
      screen: 'varliklarList-screen',
      _id: 5,
    },
    {
      text: t('headers.assetsHeaders.cryptoCurrrency'),
      iconName: 'currency-btc',
      backgroundColor: '#DB00FF',
      type: 'crypto',
      value: SearchCryptoData,
      screen: 'varliklarList-screen',
      _id: 6,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <VarliklarCard
        onPress={async () => {
          navigation.navigate(item.screen, {
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
