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
  getPortfolioTypeDetailsProcess,
} from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetStockDetail} from '../../redux/slice/varliklar/Detail/get-stock-detail-slice';
import {resetCurrencyDetail} from '../../redux/slice/varliklar/Detail/get-currency-detail-slice';
import {resetGoldDetail} from '../../redux/slice/varliklar/Detail/get-gold-detail-slice';
import {savePortfolioId} from '../../redux/slice/auth/login-slice';
import {resetAssetDetails} from '../../redux/slice/portfolio/get-asset-details-slice';
import {setAssetIdData} from '../../redux/slice/global/assetId-slice';

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
  const {data: PortfolioTypeDetailsData} = useSelector(
    state => state.getPortfolioTypeDetails,
  );
  const {data: InformSelectedData} = useSelector(
    state => state.informSelectedHeader,
  );

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

        defaultPortfolioId === undefined && dispatch(savePortfolioId(saveID));

        defaultPortfolioId != undefined
          ? dispatch(getPortfolioDetailsProcess({id: defaultPortfolioId}))
          : saveID
          ? dispatch(getPortfolioDetailsProcess({id: saveID}))
          : null;
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

  const handleReset = async () => {
    await dispatch(resetAssetDetails());
    await dispatch(resetStockDetail());
    await dispatch(resetCurrencyDetail());
    await dispatch(resetGoldDetail());
  };

  const handleInformPress = async () => {
    setEspecial(true);
  };

  useEffect(() => {
    dispatch(
      getPortfolioTypeDetailsProcess({
        id: defaultPortfolioId,
        type:
          InformSelectedData == 'Döviz'
            ? 'Currency'
            : InformSelectedData == 'Hisse Senedi'
            ? 'Stock'
            : InformSelectedData == 'Fon'
            ? 'Fund'
            : InformSelectedData == 'Kripto'
            ? 'Crypto'
            : InformSelectedData == 'Altın'
            ? 'Gold'
            : InformSelectedData == 'Türk Lirası'
            ? 'TurkishLira'
            : InformSelectedData,
      }),
    );
  }, [InformSelectedData]);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const seriesColor =
    PortfolioTypeDetailsData?.assets &&
    PortfolioTypeDetailsData?.assets?.length > 0
      ? PortfolioTypeDetailsData?.assets?.map(item => item.color)
      : ['grey'];
  const seriesEspecial =
    PortfolioTypeDetailsData?.assets &&
    PortfolioTypeDetailsData?.assets?.length > 0
      ? PortfolioTypeDetailsData?.assets?.map(item => item.assetPercentage)
      : [100];

  const renderItem = ({item, index}) => {
    console.log(
      'PortfolioDetailsData?.portfolio?.portfolioDetails[index]',
      PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.assets,
    );
    if (especial && index !== 0) {
      // Eğer especial true ise ve index 0 değilse (yani sadece ilk öğeyi göster)
      return null; // Diğer öğeleri gösterme
    }
    return (
      (!especial ||
        (especial &&
          PortfolioTypeDetailsData?.assets &&
          PortfolioTypeDetailsData?.assets?.length > 0)) && (
        <ResizableCard
          onPress={async (assetId, name, fullName) => {
            navigation.navigate('varlikDetay-screen', {
              page: 'update',
              assetId: assetId,
            });
            await dispatch(
              setAssetIdData({
                data: assetId,
                type: PortfolioDetailsData?.portfolio?.portfolioDetails[index]
                  ?.type,
                name: fullName,
              }),
            );
            await handleReset();
            await dispatch(
              getAssetDetailsProcess({
                data: {
                  portfolioId: defaultPortfolioId,
                  assetId: assetId,
                  type: PortfolioDetailsData?.portfolio?.portfolioDetails[index]
                    ?.type,
                  name: name,
                  numberOfDays: 2,
                },
              }),
            );
          }}
          borderColor={
            especial
              ? 'white'
              : PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.color
          }
          tür={
            especial
              ? InformSelectedData
              : PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.type
          }
          sendItem={
            especial && PortfolioTypeDetailsData?.assets.length > 0
              ? PortfolioTypeDetailsData?.assets
              : PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.assets
          }
          hidden={hidden}
          infoModalOnPress={() => {
            setAssetInfoItem(item);
            setIsAssetInfoModal(true);
          }}
          especial={especial}
        />
      )
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
                    <Text style={style.birimText}>₺</Text>
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
                      sliceColor={especial ? seriesColor : sliceColor}
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
                    onPress={handleInformPress}
                    setColorCallback={setColor}
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
                    ? '****₺'
                    : especial
                    ? `${PortfolioTypeDetailsData?.totalValue + ' ₺'}`
                    : `${
                        PortfolioDetailsData?.portfolio?.totalAssetValue + ' ₺'
                      }`}
                </Text>
              </View>
              <View
                style={{
                  ...style.totalProfitContainer,
                  backgroundColor:
                    PortfolioDetailsData?.portfolio?.totalProfitPercentage ||
                    PortfolioTypeDetailsData?.totalProfitPercentage > 0
                      ? 'green'
                      : 'red',
                }}>
                <Text style={style.profitText}>
                  {especial
                    ? PortfolioTypeDetailsData?.totalProfitPercentage
                    : PortfolioDetailsData?.portfolio?.totalProfitPercentage}
                  %
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
