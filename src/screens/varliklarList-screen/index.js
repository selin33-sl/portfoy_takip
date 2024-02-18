import {View, Text, BackHandler, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Header,
  LinearGradientContainer,
  Loader,
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
  getSearchStockProcess,
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
import {resetSearchStock} from '../../redux/slice/varliklar/Search/get-search-stock-slice';

export const VarliklarListScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const {text, value} = route.params;

  useEffect(() => {
    dispatch(resetStockDetail());
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
  const {data: SearchData, isLoading: SearchLoading} = useSelector(
    state => state.searchStock,
  );
  const {data: assetData} = useSelector(state => state.assetData);
  const {data: KriptoData} = useSelector(state => state.cripto);

  console.log('AllCurrencyLoading', AllCurrencyLoading);
  console.log('AllStockLoading', AllStockLoading);
  console.log('AllGoldLoading', AllGoldLoading);

  let filteredData;

  console.log('qqqqqqqqqqqqqqqqqqqqqqqq', value);

  const data =
    value == 'AllStockData'
      ? AllStockData
      : value == 'AllGoldData'
      ? AllGoldData
      : value == 'AllCurrencyData'
      ? AllCurrencyData
      : null;

  const search = async () => {
    if (value == 'AllStockData' && searchTerm != '') {
      await dispatch(getSearchStockProcess({data: searchTerm}));
    } else {
      filteredData = data;
    }
  };

  useEffect(() => {
    search();
  }, [searchTerm]);

  // useEffect(() => {
  //   search();
  // }, []);

  console.log('SearchData,', SearchData?.data);
  console.log('data,', data);

  useEffect(() => {
    if (text == t('headers.assetsHeaders.stock')) {
      dispatch(getAllStockProcess());
    } else if (text == t('headers.assetsHeaders.foreignCurrency')) {
      dispatch(getAllCurrencyProcess());
    } else if (text == t('headers.assetsHeaders.cryptoCurrrency')) {
      dispatch(getKriptoProcess());
    } else if (text == t('headers.assetsHeaders.goldSilver')) {
      dispatch(getAllGoldProcess());
    }
  }, []);

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

    return (
      <VarlikListCard
        fullName={AllStockData || AllCurrencyData || KriptoData ? true : false}
        percent={AllStockData || AllCurrencyData || AllGoldData ? true : false}
        price={item?.lastPrice}
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
          await navigation.navigate('varlikDetay-screen', {text: text});
          console.log('item?.name', item?.name);

          {
            AllStockData && AllStockData.length
              ? await dispatch(
                  getStockDetailProcess({name: item?.name, day: 2}),
                )
              : AllCurrencyData && AllCurrencyData.length
              ? await dispatch(
                  getCurrencyDetailProcess({name: item?.name, day: 2}),
                )
              : AllGoldData && AllGoldData.length
              ? await dispatch(
                  getGoldDetailProcess({data: {name: item?.name, day: 2}}),
                )
              : null;
          }
        }}
      />
    );
  };

  return (
    <LinearGradientContainer>
      {AllStockLoading === true ||
      AllGoldLoading === true ||
      AllCurrencyLoading === true ? (
        <>
          <Loader />
        </>
      ) : (
        <>
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
                data={assetData}
                renderItem={renderItem}
                keyExtractor={item => item._id.toString()}
              />
            </View>
          </View>
        </>
      )}
    </LinearGradientContainer>
  );
};
