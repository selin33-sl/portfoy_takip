import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import style from './style';
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AssetDetailsModal,
  AssetInfoModal,
  CurrencyModal,
  Header,
  Inform,
  LinearGradientContainer,
  Loader,
  NotFound,
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
import {
  getAllPortfolioProcess,
  getAssetDetailsProcess,
  getAssetPercentagesProcess,
  getPortfolioDetailsProcess,
} from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMessageAndErrorUser} from '../../hooks/useMessageandError';
import {resetPortfolioDetails} from '../../redux/slice/portfolio/get-portfolio-details-slice';
import {resetStockDetail} from '../../redux/slice/varliklar/Detail/get-stock-detail-slice';
import {resetCurrencyDetail} from '../../redux/slice/varliklar/Detail/get-currency-detail-slice';
import {resetGoldDetail} from '../../redux/slice/varliklar/Detail/get-gold-detail-slice';
import {savePortfolioId} from '../../redux/slice/auth/login-slice';

export const HomeScreen = () => {
  const {t} = useTranslation();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [header, setHeader] = useState('');
  const [color, setColor] = useState('');
  const [deger, setDeger] = useState();
  const [isAssetDetailsModal, setIsAssetDetailsModal] = useState(false);
  const [isAssetInfoModal, setIsAssetInfoModal] = useState(false);
  const [assetInfoItem, setAssetInfoItem] = useState('');
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
  const {data: AssetDetailsData} = useSelector(state => state.getAssetDetails);
  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);
  const {data: PortfolioDetailsData, isLoading: PortfolioDetailsLoading} =
    useSelector(state => state.getPortfolioDetails);

  console.log('default portfolio:', defaultPortfolioId);

  useEffect(() => {
    dispatch(getAllPortfolioProcess());

    const fetchData = async () => {
      try {
        // await AsyncStorage.removeItem('accessToken');

        defaultPortfolioId != undefined &&
          (await AsyncStorage.setItem(
            'defaultPortfolioId',
            defaultPortfolioId,
          ));

        const saveID = await AsyncStorage.getItem('defaultPortfolioId');

        console.log('savee neee 111', saveID);

        defaultPortfolioId === undefined && dispatch(savePortfolioId(saveID));

        defaultPortfolioId != undefined
          ? (console.log('bu ilk:', defaultPortfolioId),
            dispatch(getPortfolioDetailsProcess({id: defaultPortfolioId})))
          : saveID
          ? (console.log('bu da sonraki:', saveID),
            dispatch(getPortfolioDetailsProcess({id: saveID})))
          : null;

        console.log('SAVE:', saveID);
      } catch (error) {
        console.error('Error fetching selectedPortfolioId:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isPortfoyListModalVisible) {
      const fetchData = async () => {
        try {
          defaultPortfolioId != undefined &&
            (await AsyncStorage.setItem(
              'defaultPortfolioId',
              defaultPortfolioId,
            ));

          const saveID = await AsyncStorage.getItem('defaultPortfolioId');

          console.log('savee neee', saveID);
          dispatch(getPortfolioDetailsProcess({id: defaultPortfolioId}));
        } catch (error) {
          console.error('Error fetching selectedPortfolioId:', error);
        }
      };

      fetchData();
    }
  }, [isPortfoyListModalVisible]);

  const captureScreen = async () => {
    try {
      if (viewRef.current) {
        const uri = await captureRef(viewRef, {
          format: 'png',
          quality: 0.8,
        });

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
  const series = [
    PortfolioDetailsData?.distribution[5]?.percentage,
    PortfolioDetailsData?.distribution[1]?.percentage,
    PortfolioDetailsData?.distribution[4]?.percentage,
    PortfolioDetailsData?.distribution[0]?.percentage,
    PortfolioDetailsData?.distribution[2]?.percentage,
    PortfolioDetailsData?.distribution[3]?.percentage,
  ];

  const totalPercentage = series.reduce((acc, curr) => acc - curr, 0);

  console.log('tootttaalll', totalPercentage);

  const sliceColor =
    totalPercentage === 0
      ? ['grey']
      : [
          colors.nakit,
          colors.doviz,
          colors.fon,
          colors.hisseSenedi,
          colors.altin,
          colors.kripto,
        ];

  console.log();

  const handleReset = async () => {
    await dispatch(resetStockDetail());
    await dispatch(resetCurrencyDetail());
    await dispatch(resetGoldDetail());
  };

  const seriesEspecial = [deger, 100 - deger];
  const sliceColorEspecial = [color, 'grey'];
  const handleHidden = () => {
    setHidden(!hidden);
  };

  const renderItem = ({item, index, itemIndex}) => {
    console.log('assetInfoItem', assetInfoItem);
    console.log('şş:', item);
    return (
      <ResizableCard
        onPress={async (assetId, name) => {
          console.log('homeassetId', assetId);
          navigation.navigate('varlikDetay-screen', {
            page: 'update',
            assetId: assetId,
          });
          await handleReset();
          await dispatch(
            getAssetDetailsProcess({
              portfolioId: defaultPortfolioId,
              assetId: assetId,
              type: PortfolioDetailsData?.portfolio?.portfolioDetails[index]
                ?.type,
              name: name,
              day: 2,
            }),
          );
        }}
        borderColor={
          PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.color
        }
        tür={PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.type}
        sendItem={
          PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.assets
        }
        hidden={hidden}
        infoModalOnPress={() => {
          setAssetInfoItem(item);
          setIsAssetInfoModal(true);
        }}
      />
    );
  };

  return (
    <LinearGradientContainer>
      {PortfolioDetailsLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            option
            text={PortfolioDetailsData?.portfolio?.name}
            backIcon={false}
            headerOnPress={() => setIsPortfoyListModalVisible(true)}
          />
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
                    <Icon
                      name={'share-variant-outline'}
                      size={25}
                      color={'white'}
                    />
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
                      series={
                        especial
                          ? seriesEspecial
                          : totalPercentage === 0
                          ? [100]
                          : series
                      }
                      sliceColor={especial ? sliceColorEspecial : sliceColor}
                      coverRadius={0.5}
                    />

                    {especial && (
                      <TouchableOpacity
                        style={style.detailIcon}
                        onPress={async () => {
                          await dispatch(
                            getAssetPercentagesProcess({
                              id: defaultPortfolioId,
                              type:
                                header == 'Döviz'
                                  ? 'Currency'
                                  : header == 'Hisse Senedi'
                                  ? 'Stock'
                                  : header == 'Fon'
                                  ? 'Fund'
                                  : header == 'Kripto'
                                  ? 'Crypto'
                                  : header == 'Altın'
                                  ? 'Gold'
                                  : header == 'Türk Lirası'
                                  ? 'TurkishLira'
                                  : header,
                            }),
                          );
                          setIsAssetDetailsModal(true);
                        }}>
                        <Icon name={'details'} size={30} color={'white'} />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>

                  <Inform
                    especial={especial}
                    onPress={() => {
                      setEspecial(true);
                    }}
                    setColorCallback={setColor}
                    setDegerCallback={setDeger}
                    setHeaderCallback={setHeader}
                    borderColor1={PortfolioDetailsData?.distribution[5]?.color}
                    borderColor2={PortfolioDetailsData?.distribution[1]?.color}
                    borderColor3={PortfolioDetailsData?.distribution[4]?.color}
                    borderColor4={PortfolioDetailsData?.distribution[0]?.color}
                    borderColor5={PortfolioDetailsData?.distribution[2]?.color}
                    borderColor6={PortfolioDetailsData?.distribution[3]?.color}
                    deger1={PortfolioDetailsData?.distribution[5]?.percentage}
                    deger2={PortfolioDetailsData?.distribution[1]?.percentage}
                    deger3={PortfolioDetailsData?.distribution[4]?.percentage}
                    deger4={PortfolioDetailsData?.distribution[0]?.percentage}
                    deger5={PortfolioDetailsData?.distribution[2]?.percentage}
                    deger6={PortfolioDetailsData?.distribution[3]?.percentage}
                  />
                </View>
              </View>

              <View style={style.toplamContainer}>
                <Text style={style.toplamText}>
                  {hidden
                    ? '****TL'
                    : `${
                        PortfolioDetailsData?.portfolio?.totalAssetValue + ' TL'
                      }`}
                </Text>
              </View>
              <View
                style={{
                  ...style.totalProfitContainer,
                  backgroundColor:
                    PortfolioDetailsData?.portfolio?.totalProfitPercentage > 0
                      ? 'green'
                      : 'red',
                }}>
                <Text style={style.profitText}>
                  {PortfolioDetailsData?.portfolio?.totalProfitPercentage}%
                </Text>
              </View>
              <View style={style.listContainer}>
                {PortfolioDetailsData?.portfolio?.portfolioDetails?.length ===
                0 ? (
                  <NotFound
                    text={'Portföyünüzde herhangi bir varlık bulunmamaktadır.'}
                  />
                ) : (
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={PortfolioDetailsData?.portfolio?.portfolioDetails}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={false}
                  />
                )}
              </View>
            </View>
          </ScrollView>
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
            color={color}
            header={header}
            isAssetDetailsModal={isAssetDetailsModal}
            setIsAssetDetailsModal={setIsAssetDetailsModal}
          />
          <AssetInfoModal
            item={AssetDetailsData?.assetDetails}
            isModalVisible={isAssetInfoModal}
            setIsModalVisible={setIsAssetInfoModal}
          />
        </>
      )}
    </LinearGradientContainer>
  );
};
