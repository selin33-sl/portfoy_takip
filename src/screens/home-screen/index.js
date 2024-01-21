import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import style from './style';
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AssetDetailsModal,
  CurrencyModal,
  Header,
  Inform,
  LinearGradientContainer,
  PortfoyComponent,
  PortfoyListModal,
  ResizableCard,
  ShareModal,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {captureRef} from 'react-native-view-shot';
import {useTranslation} from 'react-i18next';
import {colors} from '../../theme';
import {addPortfolioProcess, getAllPortfolioProcess} from '../../api';

export const HomeScreen = () => {
  const {t} = useTranslation();
  const data = [
    {
      tür: t('headers.assetsHeaders.foreignCurrency'),
      name: 'THYAO1',
      price: '2.230,00',
      adet: '10.00',
      _id: 1,
    },
    {
      tür: t('headers.assetsHeaders.foreignCurrency'),
      name: 'THYAO2',
      price: '2.230,00',
      adet: '10.00',
      _id: 2,
    },
    {
      tür: t('headers.assetsHeaders.foreignCurrency'),
      name: 'THYAO3',
      price: '2.230,00',
      adet: '10.00',
      _id: 3,
    },
    {
      tür: t('headers.assetsHeaders.fund'),
      name: 'THYAO4',
      price: '2.230,00',
      adet: '10.00',
      _id: 4,
    },
    {
      tür: t('headers.assetsHeaders.fund'),
      name: 'THYAO5',
      price: '2.230,00',
      adet: '10.00',
      _id: 5,
    },
    {
      tür: t('headers.assetsHeaders.fund'),
      name: 'THYAO6',
      price: '2.230,00',
      adet: '10.00',
      _id: 6,
    },
  ];

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [header, setHeader] = useState('');
  const [isAssetDetailsModal, setIsAssetDetailsModal] = useState(false);
  const [especial, setEspecial] = useState(false);
  const [capturedImageURI, setCapturedImageURI] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);
  const [isPortfoyAddModalVisible, setIsPortfoyAddModalVisible] =
    useState(false);

  const viewRef = useRef();

  const {data: AllPortfolioData} = useSelector(state => state.getAllPortfolio);

  useEffect(() => {
    dispatch(getAllPortfolioProcess());
  }, []);

  const handleCreatePortfolio = () => {
    dispatch(addPortfolioProcess({}));
  };

  const captureScreen = async () => {
    try {
      if (viewRef.current) {
        const uri = await captureRef(viewRef, {
          format: 'png',
          quality: 0.8,
        });

        console.log('Captured Image URI:', uri);

        setCapturedImageURI(uri);

        // Ekran görüntüsünü paylaşma
        // await Share.open({
        //   url: `file://${uri}`,
        // });
      } else {
        console.error('Ref mevcut değil.');
      }
    } catch (error) {
      console.error(
        'Ekran görüntüsü alınırken veya paylaşılırken hata oluştu:',
        error,
      );
    }
  };

  const widthAndHeight = 170;
  const series = [364.16, 302.4, 228.45, 103.02, 0, 0];
  const sliceColor = [
    colors.nakit,
    colors.doviz,
    colors.fon,
    colors.hisseSenedi,
    colors.altin,
    colors.kripto,
  ];

  const seriesEspecial = [70, 10];
  const sliceColorEspecial = [colors.doviz, 'grey'];

  const calculatePercentage = series => {
    const total = series.reduce((sum, value) => sum + value, 0);
    return series.map(value => ((value / total) * 100).toFixed(2));
  };
  const percentages = calculatePercentage(series);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const getUniqueTurItems = data => {
    const uniqueTurItems = {};
    data.forEach(item => {
      const tur = item.tür;
      if (!uniqueTurItems[tur]) {
        uniqueTurItems[tur] = item;
      }
    });
    return Object.values(uniqueTurItems);
  };

  const uniqueTurItems = getUniqueTurItems(data);

  const renderItem = ({item}) => {
    const {tür} = item;
    const itemsWithSameTur = data.filter(dataItem => dataItem.tür === tür);

    return (
      <ResizableCard
        onPress={() =>
          navigation.navigate('varlikDetay-screen', {page: 'update'})
        }
        borderColor={
          tür == t('headers.assetsHeaders.foreignCurrency')
            ? colors.doviz
            : tür == t('headers.assetsHeaders.fund')
            ? colors.fon
            : null
        }
        tür={tür}
        sendItem={itemsWithSameTur.map(({name, price, adet}) => ({
          name,
          price,
          adet,
        }))}
        hidden={hidden}
      />
    );
  };

  return (
    <LinearGradientContainer>
      <Header
        option
        text={'PORTFOY_1'}
        backIcon={false}
        headerOnPress={() => setIsPortfoyListModalVisible(true)}
      />
      <View style={style.innerContainer}>
        <View style={style.pieChartContainer}>
          <View style={style.optionContainer}>
            <TouchableOpacity
              style={style.shareContainer}
              // onPress={captureScreen}
              onPress={() => setIsModalVisible(true)}>
              <Text style={style.birimText}>TL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.shareContainer}
              // onPress={captureScreen}
              onPress={handleHidden}>
              <Icon
                name={hidden == true ? 'eye-off-outline' : 'eye-outline'}
                size={25}
                color={colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.shareContainer}
              // onPress={captureScreen}
              onPress={async () => {
                await captureScreen();
                await setIsShareModalVisible(true);
              }}>
              <Icon name={'share-variant-outline'} size={25} color={'white'} />
            </TouchableOpacity>
          </View>

          <View ref={viewRef} collapsable={false} style={style.shareArea}>
            <TouchableOpacity
              activeOpacity={1.0}
              style={style.pieChart}
              onPress={() => setEspecial(false)}>
              <PieChart
                showText
                widthAndHeight={widthAndHeight}
                series={especial ? seriesEspecial : series}
                sliceColor={especial ? sliceColorEspecial : sliceColor}
                coverRadius={0.5}
              />

              {especial && (
                <TouchableOpacity
                  style={style.detailIcon}
                  onPress={() => setIsAssetDetailsModal(true)}>
                  <Icon name={'details'} size={30} color={'white'} />
                </TouchableOpacity>
              )}
            </TouchableOpacity>

            <Inform
              especial={especial}
              onPress={() => setEspecial(true)}
              setHeaderCallback={setHeader} // Pass setHeader as a callback
              deger1={`${percentages[0]}`}
              deger2={`${percentages[1]}`}
              deger3={`${percentages[2]}`}
              deger4={`${percentages[3]}`}
              deger5={`${percentages[4]}`}
              deger6={`${percentages[5]}`}
            />
          </View>
        </View>

        <View style={style.toplamContainer}>
          <Text style={style.toplamText}>{hidden ? '****TL' : '1.377 TL'}</Text>
        </View>
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={uniqueTurItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <CurrencyModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />

      <PortfoyComponent
        isListModalVisible={isPortfoyListModalVisible}
        setIsListModalVisible={setIsPortfoyListModalVisible}
        isAddModalVisible={isPortfoyAddModalVisible}
        setIsAddModalVisible={setIsPortfoyAddModalVisible}
        data={AllPortfolioData}
      />
      <ShareModal
        isModalVisible={isShareModalVisible}
        setIsModalVisible={setIsShareModalVisible}
        image={capturedImageURI}
      />
      <AssetDetailsModal
        header={header}
        isAssetDetailsModal={isAssetDetailsModal}
        setIsAssetDetailsModal={setIsAssetDetailsModal}
      />
    </LinearGradientContainer>
  );
};
