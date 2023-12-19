import {View, Text, BackHandler, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Header, SearchBar, VarlikListCard} from '../../components';
import {
  getAltinProcess,
  getDovizProcess,
  getEmtiaProcess,
  getGumusProcess,
  getHisseSenediProcess,
  getKriptoProcess,
} from '../../api';
import {resetHisseSenedi} from '../../redux/slice/varliklar/get-hisse-senedi-slice';
import {resetDoviz} from '../../redux/slice/varliklar/get-doviz-slice';
import {resetKripto} from '../../redux/slice/varliklar/get-kripto-slice';
import {resetEmtia} from '../../redux/slice/varliklar/get-emtia-slice';
import {resetGumus} from '../../redux/slice/varliklar/get-gumus-slice';
import {resetAltin} from '../../redux/slice/varliklar/get-altin-slice';

export const VarliklarListScreen = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {text} = route.params;

  const {data: HisseSenediData} = useSelector(state => state.hisseSenedi);
  const {data: DövizData} = useSelector(state => state.allCurrency);
  const {data: KriptoData} = useSelector(state => state.cripto);
  const {data: EmtiaData} = useSelector(state => state.emtia);
  const {data: GumusData} = useSelector(state => state.silverPrice);
  const {data: AltinData} = useSelector(state => state.goldPrice);

  const data =
    HisseSenediData && HisseSenediData.length
      ? HisseSenediData
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
    if (text == 'Hisse Senedi') {
      dispatch(getHisseSenediProcess());
    } else if (text == 'Döviz') {
      dispatch(getDovizProcess());
    } else if (text == 'Kripto Para') {
      dispatch(getKriptoProcess());
    } else if (text == 'Altın | Gümüş | Emtia') {
      dispatch(getEmtiaProcess());
      dispatch(getGumusProcess());
      dispatch(getAltinProcess());
    }
    dispatch(resetAltin());
    dispatch(resetGumus());
    dispatch(resetEmtia());
    dispatch(resetHisseSenedi());
    dispatch(resetDoviz());
    dispatch(resetKripto());
  }, []);

  const filteredData = data?.filter(item => {
    const code = item?.code
      ? item?.code.toLowerCase()
      : item?.name
      ? item?.name.toLowerCase()
      : '';
    const searchTermLower = searchTerm.toLowerCase();
    return code.includes(searchTermLower);
  });

  const renderItem = ({item}) => {
    // extractedText varsayılan olarak boş bir string olsun
    let extractedText = '';

    if (HisseSenediData) {
      // HisseSenediData dolu olduğunda bu kısmı çalıştır
      const lines = item?.text.split('\n');
      // gereksiz boşlukları temizle
      extractedText = lines[2] ? lines[2].trim() : '';
    }

    // item.rate'den renk ve yuvarlanmış değeri al
    const rateValue = parseFloat(item?.rate);
    const roundedRate = Math.abs(rateValue).toFixed(1); // Noktadan sonraki 1 basamak

    // item?.selling'den fiyat değerini al ve noktadan sonra 2 basamağa yuvarla
    const sellingPrice = item?.selling
      ? parseFloat(item?.selling).toFixed(2)
      : item?.price
      ? parseFloat(item?.price).toFixed(2)
      : null;

    // Renk belirleme
    const color = rateValue < 0 ? 'red' : 'green';

    return (
      <VarlikListCard
        price={
          HisseSenediData
            ? item?.lastprice
            : DövizData || KriptoData
            ? sellingPrice
            : null
        }
        first={HisseSenediData || DövizData || KriptoData ? true : false}
        second={HisseSenediData || KriptoData ? true : false}
        code={
          EmtiaData || AltinData
            ? item?.name
            : GumusData
            ? item?.currency
            : item?.code
        }
        firstText={
          HisseSenediData
            ? extractedText
            : DövizData || KriptoData
            ? item?.name
            : null
        }
        color={color}
        secondText={
          HisseSenediData ? roundedRate : KriptoData ? item?.changeDay : null
        }
        onPress={() => navigation.navigate('varlikDetay-screen')}
      />
    );
  };

  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
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
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* <VarlikListCard
          // code={HisseSenediData}
          onPress={() => navigation.navigate('varlikDetay-screen')}
        />
        <VarlikListCard
          onPress={() => navigation.navigate('varlikDetay-screen')}
        />
        <VarlikListCard
          onPress={() => navigation.navigate('varlikDetay-screen')}
        /> */}
      </View>
    </LinearGradient>
  );
};
