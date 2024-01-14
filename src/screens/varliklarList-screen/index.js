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
  getAllStockProcess,
  getAltinProcess,
  getDovizProcess,
  getEmtiaProcess,
  getGumusProcess,
  getKriptoProcess,
} from '../../api';
import {resetAllStock} from '../../redux/slice/varliklar/get-all-stock-slice';
import {resetDoviz} from '../../redux/slice/varliklar/get-doviz-slice';
import {resetKripto} from '../../redux/slice/varliklar/get-kripto-slice';
import {resetEmtia} from '../../redux/slice/varliklar/get-emtia-slice';
import {resetGumus} from '../../redux/slice/varliklar/get-gumus-slice';
import {resetAltin} from '../../redux/slice/varliklar/get-altin-slice';
import {useTranslation} from 'react-i18next';

export const VarliklarListScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {text} = route.params;

  const {data: AllStockData} = useSelector(state => state.getAllStock);
  const {data: DövizData} = useSelector(state => state.allCurrency);
  const {data: KriptoData} = useSelector(state => state.cripto);
  const {data: EmtiaData} = useSelector(state => state.emtia);
  const {data: GumusData} = useSelector(state => state.silverPrice);
  const {data: AltinData} = useSelector(state => state.goldPrice);

  const data =
    AllStockData && AllStockData.length
      ? AllStockData
      : DövizData && DövizData.length
      ? DövizData
      : KriptoData && KriptoData.length
      ? KriptoData
      : EmtiaData && EmtiaData.length
      ? EmtiaData
      : GumusData && GumusData.length
      ? GumusData
      : AltinData && AltinData.length
      ? AltinData
      : null;

  useEffect(() => {
    if (text == t('headers.assetsHeaders.stock')) {
      dispatch(getAllStockProcess());
    } else if (text == t('headers.assetsHeaders.foreignCurrency')) {
      dispatch(getDovizProcess());
    } else if (text == t('headers.assetsHeaders.cryptoCurrrency')) {
      dispatch(getKriptoProcess());
    } else if (text == t('headers.assetsHeaders.goldSilverCommodity')) {
      dispatch(getEmtiaProcess());
      dispatch(getGumusProcess());
      dispatch(getAltinProcess());
    }
    dispatch(resetAltin());
    dispatch(resetGumus());
    dispatch(resetEmtia());
    dispatch(resetAllStock());
    dispatch(resetDoviz());
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

    if (AllStockData) {
      const words = item?.name.split(' ');
      code = words[0] ? words[0].trim() : '';
      fullName = words.slice(1).join(' ').trim();
    }

    // item.rate'den renk ve yuvarlanmış değeri al
    const rateValue = parseFloat(item?.changePercent);
    const roundedRate = Math.abs(rateValue).toFixed(1); // Noktadan sonraki 1 basamak

    // Renk belirleme
    const color = rateValue < 0 ? 'red' : 'green';

    return (
      <VarlikListCard
        price={item?.lastPrice}
        fullName={AllStockData || DövizData || KriptoData ? true : false}
        percent={AllStockData || KriptoData ? true : false}
        code={code}
        fullNameText={fullName}
        color={color}
        percentText={
          AllStockData ? roundedRate : KriptoData ? item?.changeDay : null
        }
        onPress={() => navigation.navigate('varlikDetay-screen')}
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
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* <VarlikListCard
          // code={AllStockData}
          onPress={() => navigation.navigate('varlikDetay-screen')}
        />
        <VarlikListCard
          onPress={() => navigation.navigate('varlikDetay-screen')}
        />
        <VarlikListCard
          onPress={() => navigation.navigate('varlikDetay-screen')}
        /> */}
      </View>
    </LinearGradientContainer>
  );
};
