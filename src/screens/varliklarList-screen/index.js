import {View, Text, BackHandler, FlatList} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import React, {useState, useEffect, useCallback, useRef} from 'react';
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
  getFundDetailProcess,
  getGoldDetailProcess,
  getKriptoProcess,
  getSearchCurrencyProcess,
  getSearchFundProcess,
  getSearchGoldProcess,
  getSearchStockProcess,
  getStockDetailProcess,
} from '../../api';

import {useTranslation} from 'react-i18next';
import {resetStockDetail} from '../../redux/slice/varliklar/Detail/get-stock-detail-slice';
import {colors} from '../../theme';

export const VarliklarListScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const {text, value} = route.params;

  useEffect(() => {
    dispatch(resetStockDetail());
  }, []);

  const {data: SearchStockData, isLoading: SearchStockLoading} = useSelector(
    state => state.searchStock,
  );
  const {data: SearchCurrencyData, isLoading: SearchCurrencyLoading} =
    useSelector(state => state.searchCurrency);
  const {data: SearchFundData, isLoading: SearchFundLoading} = useSelector(
    state => state.searchFund,
  );
  const {data: assetData, type: assetType} = useSelector(
    state => state.assetData,
  );

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const searchAsset = async searchQuery => {
    try {
      if (assetType == 'stock') {
        await dispatch(getSearchStockProcess({data: searchQuery}));
      } else if (assetType == 'currency') {
        await dispatch(getSearchCurrencyProcess({data: searchQuery}));
      } else if (assetType == 'currency') {
        await dispatch(getSearchFundProcess({data: searchQuery}));
      }
    } catch (error) {
      console.error('Error during search:', error);
      // Handle error
    }
  };

  const debouncedSearch = useCallback(debounce(searchAsset, 500), []);

  useEffect(() => {
    if (searchTerm != '') {
      debouncedSearch(searchTerm);
    } else if (!searchTerm == '') {
      dispatch(getSearchStockProcess({data: ''}));
      dispatch(getSearchCurrencyProcess({data: ''}));
      dispatch(getSearchGoldProcess({data: {searchParam: ''}}));
      dispatch(getSearchFundProcess({data: ''}));
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredData(SearchStockData?.data);
    } else {
      setFilteredData(assetData?.data);
    }
  }, [searchTerm, SearchStockData]);

  const search = async () => {
    if (assetType == 'stock' && searchTerm != '') {
      await dispatch(getSearchStockProcess({data: searchTerm}));
      setSearchData(SearchStockData?.data);
    } else if (assetType == 'currency' && searchTerm != '') {
      await dispatch(getSearchCurrencyProcess({data: searchTerm}));
      setSearchData(SearchCurrencyData?.data);
    } else if (assetType == 'fund' && searchTerm != '') {
      await dispatch(getSearchFundProcess({data: searchTerm}));
      setSearchData(SearchFundData?.data);
    }
  };

  useEffect(() => {
    search();
  }, [searchTerm]);

  const renderStartTime = useRef(performance.now());
  const renderItem = ({item}) => {
    return (
      <VarlikListCard
        fullName
        percent
        price={item?.lastPrice}
        code={item?.name}
        fullNameText={item?.desc}
        percentText={item?.changePercent}
        onPress={async () => {
          await navigation.navigate('varlikDetay-screen', {text: text});

          {
            assetType == 'stock'
              ? await dispatch(
                  getStockDetailProcess({name: item?.name, day: 2}),
                )
              : assetType == 'currency'
              ? await dispatch(
                  getCurrencyDetailProcess({name: item?.name, day: 2}),
                )
              : assetType == 'gold'
              ? await dispatch(
                  getGoldDetailProcess({data: {name: item?.name, day: 2}}),
                )
              : assetType == 'fund'
              ? await dispatch(
                  getFundDetailProcess({data: {name: item?.name, day: 2}}),
                )
              : null;
          }
        }}
      />
    );
  };

  return (
    <LinearGradient
      colors={[colors.primary1, colors.primary2]}
      style={style.container}>
      {SearchCurrencyLoading === true ? (
        <Loader />
      ) : (
        <>
          <Header text={text} backIcon />

          <SearchBar
            value={searchTerm}
            onChangeText={setSearchTerm}
            onClear={() => setSearchTerm('')}
          />

          <View style={style.listContainer}>
            <FlashList
              showsVerticalScrollIndicator={false}
              data={filteredData}
              renderItem={renderItem}
              estimatedItemSize={200}
              keyExtractor={item => item._id.toString()}
              onLayout={() => {
                const renderEndTime = performance.now();
                const renderDuration = renderEndTime - renderStartTime.current;
              }}
            />
          </View>
        </>
      )}
    </LinearGradient>
  );
};
