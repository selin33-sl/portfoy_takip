import {View, ActivityIndicator} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Header, NotFound, SearchBar, VarlikListCard} from '../../components';
import {
  getCurrencyDetailProcess,
  getFundDetailProcess,
  getGoldDetailProcess,
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
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

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
  const {data: SearchGoldData} = useSelector(state => state.searchGold);

  const {data: assetData, type: assetType} = useSelector(
    state => state.assetData,
  );

  console.log('SearchGoldData', SearchGoldData);

  const searchAsset = async (searchQuery, pageNum) => {
    try {
      setLoading(true);
      console.log('pagenumn', pageNum);
      if (assetType == 'stock') {
        await dispatch(
          getSearchStockProcess({data: searchQuery, page: pageNum}),
        );
      } else if (assetType == 'currency') {
        await dispatch(
          getSearchCurrencyProcess({data: searchQuery, page: pageNum}),
        );
      } else if (assetType == 'fund') {
        await dispatch(
          getSearchFundProcess({data: searchQuery, page: pageNum}),
        );
      } else if (assetType == 'gold') {
        await dispatch(
          getSearchGoldProcess({
            data: {searchParam: searchQuery},
            page: pageNum,
          }),
        );
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  useEffect(() => {
    searchAsset(searchTerm, offset);
  }, [offset]);

  useEffect(() => {
    setOffset(1);
    searchAsset(searchTerm, offset);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm && offset == 1) {
      if (assetType == 'stock') {
        setFilteredData(SearchStockData?.data);
        setLoading(false);
      } else if (assetType == 'currency') {
        setFilteredData(SearchCurrencyData?.data);
        setLoading(false);
      } else if (assetType == 'fund') {
        setFilteredData(SearchFundData?.data);
        setLoading(false);
      } else if (assetType == 'gold') {
        setFilteredData(SearchGoldData?.data);
        setLoading(false);
      }
    } else if (offset != 1) {
      if (assetType == 'stock') {
        setFilteredData(prevData => {
          console.log('buraya giriyor mu', SearchStockData?.data);
          return [...prevData, ...SearchStockData?.data];
        });
        setLoading(false);
      } else if (assetType == 'currency') {
        setFilteredData(prevData => {
          console.log('buraya giriyor mu', SearchCurrencyData?.data);
          return [...prevData, ...SearchCurrencyData?.data];
        });
        setLoading(false);
      } else if (assetType == 'fund') {
        setFilteredData(prevData => {
          console.log('buraya giriyor mu', SearchFundData?.data);
          return [...prevData, ...SearchFundData?.data];
        });
        setLoading(false);
      } else if (assetType == 'gold') {
        setFilteredData(prevData => {
          console.log('buraya giriyor mu', SearchGoldData?.data);
          return [...prevData, ...SearchGoldData?.data];
        });
        setLoading(false);
      }
    } else {
      setFilteredData(assetData?.data);
    }
  }, [
    searchTerm,
    SearchStockData,
    SearchCurrencyData,
    SearchFundData,
    SearchGoldData,
  ]);

  console.log('SearchStockData:', SearchStockData?.data);
  console.log('assetData?.data:', assetData?.data);
  console.log('flteredDATA:', filteredData);

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

  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {loading ? (
          <ActivityIndicator color="white" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  const handleLoadMore = () => {
    console.log('ne zaman çalışıyor', offset);

    console.log('geldi mi');
    setOffset(offset + 1);
  };
  return (
    <LinearGradient
      colors={[colors.primary1, colors.primary2]}
      style={style.container}>
      <Header text={text} backIcon />

      <SearchBar
        value={searchTerm}
        onChangeText={setSearchTerm}
        onClear={() => setSearchTerm('')}
      />

      <View style={style.listContainer}>
        {filteredData.length > 0 ? (
          <FlashList
            showsVerticalScrollIndicator={false}
            data={filteredData}
            renderItem={renderItem}
            estimatedItemSize={200}
            keyExtractor={item => item._id.toString()}
            onLayout={() => {
              const renderEndTime = performance.now();
              const renderDuration = renderEndTime - renderStartTime.current;
              console.log(renderDuration);
            }}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        ) : (
          <NotFound text={'Aradığınız kriterde bir varlık bulunamadı'} />
        )}
      </View>
    </LinearGradient>
  );
};
