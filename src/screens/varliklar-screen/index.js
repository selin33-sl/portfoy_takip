import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Header, LinearGradientContainer, VarliklarCard} from '../../components';
import style from './style';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {assetData} from '../../redux/slice/global/asset-data-slice';
import {
  getAllCurrencyProcess,
  getAllGoldProcess,
  getAllStockProcess,
} from '../../api';

export const VarliklarScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (AssetData == undefined) {
      dispatch(getAllStockProcess());
      dispatch(getAllCurrencyProcess());
      dispatch(getAllGoldProcess());
    }
  }, []);

  const {data: AllStockData, isLoading: AllStockLoading} = useSelector(
    state => state.getAllStock,
  );

  const {data: AllCurrencyData, isLoading: AllCurrencyLoading} = useSelector(
    state => state.getAllCurrency,
  );
  const {data: AllGoldData, isLoading: AllGoldLoading} = useSelector(
    state => state.getAllGold,
  );
  const {data: AssetData} = useSelector(state => state.assetData);

  const data = [
    {
      text: t('headers.assetsHeaders.turkisLira'),
      value: AllStockData,
      iconName: 'currency-try',
      backgroundColor: '#3401FF',
      _id: 1,
    },
    {
      text: t('headers.assetsHeaders.goldSilver'),
      value: AllGoldData,
      iconName: 'gold',
      backgroundColor: '#FF7A00',
      _id: 2,
    },
    {
      text: t('headers.assetsHeaders.foreignCurrency'),
      iconName: 'money-symbol',
      value: AllCurrencyData,
      backgroundColor: '#00EFFE',
      doviz: true,
      _id: 3,
    },
    {
      text: t('headers.assetsHeaders.fund'),
      iconName: 'file-multiple-outline',
      backgroundColor: '#FF007A',
      value: AllGoldData,
      _id: 4,
    },
    {
      text: t('headers.assetsHeaders.stock'),
      iconName: 'chart-line',
      value: AllStockData,
      backgroundColor: '#BCFE00',
      _id: 5,
    },
    {
      text: t('headers.assetsHeaders.cryptoCurrrency'),
      iconName: 'currency-btc',
      backgroundColor: '#DB00FF',
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
          dispatch(assetData(item.value));
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
