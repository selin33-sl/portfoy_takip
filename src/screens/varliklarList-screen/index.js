import {View, Text, BackHandler, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Header,
  LinearGradientContainer,
  SearchBar,
  VarlikListCard,
} from '../../components';
import {
  getAllCurrencyProcess,
  getAllGoldProcess,
  getAllStockProcess,
  getCurrencyDetailProcess,
  getGoldDetailProcess,
  getKriptoProcess,
  getStockDetailProcess,
} from '../../api';
import {resetAllStock} from '../../redux/slice/varliklar/All/get-all-stock-slice';
import {
  resetAllCurrency,
  resetDoviz,
} from '../../redux/slice/varliklar/All/get-all-currency-slice';
import {resetKripto} from '../../redux/slice/varliklar/get-kripto-slice';
import {resetEmtia} from '../../redux/slice/varliklar/get-emtia-slice';
import {resetGumus} from '../../redux/slice/varliklar/get-gumus-slice';
import {
  resetAllGold,
  resetAltin,
} from '../../redux/slice/varliklar/All/get-all-gold-slice';
import {useTranslation} from 'react-i18next';
import {resetStockDetail} from '../../redux/slice/varliklar/Detail/get-stock-detail-slice';

export const VarliklarListScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {text} = route.params;

  useEffect(() => {
    dispatch(resetStockDetail());
  }, []);

  const {data: AllStockData} = useSelector(state => state.getAllStock);
  const {data: AllCurrencyData} = useSelector(state => state.getAllCurrency);
  const {data: KriptoData} = useSelector(state => state.cripto);
  const {data: EmtiaData} = useSelector(state => state.emtia);
  const {data: GumusData} = useSelector(state => state.silverPrice);
  const {data: AllGoldData} = useSelector(state => state.getAllGold);

  const data =
    AllStockData && AllStockData.length
      ? AllStockData
      : AllCurrencyData && AllCurrencyData.length
      ? AllCurrencyData
      : AllGoldData && AllGoldData.length
      ? AllGoldData
      : KriptoData && KriptoData.length
      ? KriptoData
      : EmtiaData && EmtiaData.length
      ? EmtiaData
      : GumusData && GumusData.length
      ? GumusData
      : null;

  useEffect(() => {
    if (text == t('headers.assetsHeaders.stock')) {
      dispatch(getAllStockProcess());
    } else if (text == t('headers.assetsHeaders.foreignCurrency')) {
      dispatch(getAllCurrencyProcess());
    } else if (text == t('headers.assetsHeaders.cryptoCurrrency')) {
      dispatch(getKriptoProcess());
    } else if (text == t('headers.assetsHeaders.goldSilver')) {
      // dispatch(getEmtiaProcess());
      // dispatch(getGumusProcess());
      dispatch(getAllGoldProcess());
    }
    dispatch(resetAllStock());
    dispatch(resetAllCurrency());
    dispatch(resetAllGold());

    dispatch(resetGumus());
    dispatch(resetEmtia());
    dispatch(resetKripto());
  }, []);

  // const filteredData = data?.filter(item => {
  //   const code = item?.code
  //     ? item?.code.toLowerCase()
  //     : item?.name
  //     ? item?.name.toLowerCase()
  //     : '';
  //   const searchTermLower = searchTerm.toLowerCase();
  //   return code.includes(searchTermLower);
  // });

  const renderItem = ({item}) => {
    let code = '';
    let fullName = '';
    let newGoldName = '';

    if (AllStockData) {
      const words = item?.name.split(' ');
      code = words[0] ? words[0].trim() : '';
      fullName = words.slice(1).join(' ').trim();
    }

    if (AllGoldData) {
      const words = item?.name.split(' ');
      newGoldName = words[0] ? words[0].trim() : '';
    }

    // item.rate'den renk ve yuvarlanmış değeri al
    let rateValue = parseFloat(item?.changePercent);
    let roundedRate = Math.abs(rateValue).toFixed(1); // Noktadan sonraki 1 basamak

    // `AllCurrencyData` durumu için `changePercent` değerini düzenle
    if (AllCurrencyData || AllGoldData) {
      rateValue = parseFloat(
        item?.changePercent.replace('%', '').replace(',', '.'),
      );
      roundedRate = `${Math.abs(rateValue).toFixed(2)}`;
    }

    // Renk belirleme
    const color = rateValue < 0 ? 'red' : 'green';

    console.log('naemeeeeeee: ', item?.name);

    return (
      <VarlikListCard
        fullName={AllStockData || AllCurrencyData || KriptoData ? true : false}
        percent={AllStockData || AllCurrencyData || AllGoldData ? true : false}
        price={AllGoldData ? item?.price : item?.lastPrice}
        code={
          AllStockData
            ? code
            : AllCurrencyData || AllGoldData
            ? item?.name
            : null
        }
        fullNameText={
          AllStockData ? fullName : AllCurrencyData ? item?.desc : null
        }
        color={color}
        percentText={roundedRate}
        onPress={async () => {
          {
            AllStockData && AllStockData.length
              ? await dispatch(getStockDetailProcess(item?.name))
              : AllCurrencyData && AllCurrencyData.length
              ? await dispatch(getCurrencyDetailProcess(item?.name))
              : AllGoldData && AllGoldData.length
              ? await dispatch(getGoldDetailProcess(newGoldName))
              : null;
          }
          await navigation.navigate('varlikDetay-screen');
        }}
      />
    );
  };

  return (
    <LinearGradientContainer>
      <Header text={text} backIcon />
      <View style={style.innerContainer}>
        <SearchBar
          value={searchTerm}
          onChangeText={setSearchTerm}
          onClear={() => setSearchTerm('')}
        />
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
          />
        </View>
      </View>
    </LinearGradientContainer>
  );
};
