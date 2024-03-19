import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';
import {
  AlertModal,
  AssetSellModal,
  Button,
  CalendarModal,
  FullScreenLineChartModal,
  Header,
  InputContainer,
  LineChartt,
  LinearGradientContainer,
  Loader,
  TimePeriodModal,
} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {
  addAssetProcess,
  deleteAssetProcess,
  getAssetDetailsProcess,
  getCryptoDetailProcess,
  getCurrencyDetailProcess,
  getFundDetailProcess,
  getGoldDetailProcess,
  getPortfolioDetailsProcess,
  getStockDetailProcess,
  updateAssetProcess,
} from '../../api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../theme';
import {resetDeleteAsset} from '../../redux/slice/portfolio/delete-asset-slice';
import {useToast} from '../../hooks/useToast';
import {resetAddAsset} from '../../redux/slice/portfolio/add-asset-slice';
import {resetStockDetail} from '../../redux/slice/varliklar/Detail/get-stock-detail-slice';
import {resetCurrencyDetail} from '../../redux/slice/varliklar/Detail/get-currency-detail-slice';
import {resetAssetDetails} from '../../redux/slice/portfolio/get-asset-details-slice';
import {resetUpdateAsset} from '../../redux/slice/portfolio/update-asset-slice';
import {resetCryptoDetail} from '../../redux/slice/varliklar/Detail/get-crypto-detail-slice';
import {resetFundDetail} from '../../redux/slice/varliklar/Detail/get-fund-detail-slice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const VarlikDetayScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {params: {page = 0, text, assetId} = {}} = useRoute();

  const [desc, setDesc] = useState('');
  const [code, setCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState(t('timePeriodModal.today'));
  const [timePeriodVisible, setTimePeriodVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(2);
  const [miktar1, setMiktar1] = useState('');
  const [miktar2, setMiktar2] = useState('');
  const [fiyat1, setFiyat1] = useState('');
  const [fiyat2, setFiyat2] = useState('');
  // const [loading, setlLoading] = useState(false);
  // const [selectedPortfolioId, setSelectedPortfolioId] = useState('');

  const {
    data: StockDetailData,
    // lastPrice: StokLastPrice,
    // name: StokName,
    isLoading: StokLoading,
  } = useSelector(state => state.getStockDetail);

  const {
    data: CurrencyDetailData,
    // lastPrice: CurrencyLastPrice,
    // name: CurrencyName,
    isLoading: CurrencyLoading,
    // description: CurrencyDescription,
  } = useSelector(state => state.getCurrencyDetail);
  const {
    data: CryptoDetailData,
    // lastPrice: CryptoLastPrice,
    // name: CryptoName,
    isLoading: CryptoLoading,
    // description: CryptoDescription,
  } = useSelector(state => state.getCryptoDetail);

  const {
    data: FundDetailData,
    // lastPrice: FundLastPrice,
    // name: FundName,
    isLoading: FundLoading,
    // description: FundDescription,
  } = useSelector(state => state.getFundDetail);

  const {
    data: GoldDetailData,
    // lastPrice: GoldLastPrice,
    name: GoldName,
    isLoading: GoldLoading,
  } = useSelector(state => state.getGoldDetail);

  const {status: DeleteAssetStatus, message: DeleteAssetMessage} = useSelector(
    state => state.removeAsset,
  );

  const {status: UpdateAssetStatus, message: UpdateAssetMessage} = useSelector(
    state => state.updateAsset,
  );

  const {status: AddAssetStatus, message: AddAssetMessage} = useSelector(
    state => state.addAsset,
  );

  const {data: AssetDetailsData, isLoading: AssetDetailsLoading} = useSelector(
    state => state.getAssetDetails,
  );
  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);

  console.log('AddAssetStatus', AddAssetStatus);

  useToast(
    DeleteAssetStatus,
    resetDeleteAsset(),
    DeleteAssetMessage,
    DeleteAssetMessage,
    dispatch,
  );

  useToast(
    AddAssetStatus,
    resetAddAsset(),
    AddAssetMessage,
    AddAssetMessage,
    dispatch,
  );

  useToast(
    UpdateAssetStatus,
    resetUpdateAsset(),
    UpdateAssetMessage,
    UpdateAssetMessage,
    dispatch,
  );

  let data;

  useEffect(() => {
    if (StockDetailData) {
      data = StockDetailData;
    } else if (CurrencyDetailData) {
      data = CurrencyDetailData;
    } else if (CryptoDetailData) {
      data = CryptoDetailData;
    } else if (FundDetailData) {
      data = FundDetailData;
    } else if (GoldDetailData) {
      data = GoldDetailData;
    } else {
      data = AssetDetailsData;
    }
    if (!AssetDetailsData) {
      setFullName(data?.fullName);
      setDesc(data?.description);
      setCode(data?.name);
    } else {
      setFullName(data?.assetDetails?.fullName);
      setDesc(data?.assetDetails?.description);
      setCode(data?.assetDetails?.name);
    }
  }, [
    StockDetailData,
    CurrencyDetailData,
    GoldDetailData,
    AssetDetailsData,
    CryptoDetailData,
    FundDetailData,
  ]);

  useEffect(() => {
    if (AssetDetailsData?.assetDetails && page == 'update') {
      const quantityParts = AssetDetailsData?.assetDetails?.quantity.split('.');
      const quantityBeforeDot = quantityParts[0];
      const quantityAfterDot = quantityParts[1];

      const purchasePriceParts =
        AssetDetailsData?.assetDetails?.purchasePrice?.split('.');
      const purchasePriceBeforeDot = purchasePriceParts[0];
      const purchasePriceAfterDot = purchasePriceParts[1];

      const date = AssetDetailsData?.assetDetails?.purchaseDate;
      setMiktar1(quantityBeforeDot);
      setMiktar2(quantityAfterDot);
      setFiyat1(purchasePriceBeforeDot);
      setFiyat2(purchasePriceAfterDot);
      setSelectedDate(date);
    }
  }, [AssetDetailsData]);

  //HOOK YAPACCAĞIZ BUNA

  useEffect(() => {
    if (page == 'update' && StockDetailData) {
      dispatch(resetStockDetail());
    } else if (page == 'update' && CurrencyDetailData) {
      dispatch(resetCurrencyDetail());
    } else if (page == 'update' && FundDetailData) {
      dispatch(resetFundDetail());
    } else if (page != 'update' && AssetDetailsData) {
      dispatch(resetAssetDetails());
    } else if (page == 'update' && CryptoDetailData) {
      dispatch(resetCryptoDetail());
    }
  }, [
    StockDetailData,
    CurrencyDetailData,
    AssetDetailsData,
    CryptoDetailData,
    FundDetailData,
  ]);

  const handleDeleteAsset = async () => {
    await dispatch(
      deleteAssetProcess({
        portfolioId: defaultPortfolioId,
        assetId: assetId,
      }),
    );
    await dispatch(getPortfolioDetailsProcess({id: defaultPortfolioId}));

    setIsAlertModalVisible(false);

    navigation.navigate('home-screen');
  };

  //CALEDAR MODALDA KULLANILAN FORMAT İLE BU FONKSİYONU TEK FONKSİYONDA BİRLEŞTİRECĞİZ

  const getCurrentDateFormatted = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());
    return `${day}-${month}-${year}`;
  };

  const calculateTotalQuantity = (miktar1, miktar2) => {
    return miktar1 || miktar2 ? `${miktar1 || '0'}.${miktar2 || '0'}` : '0.0';
  };

  const calculateTotalPrice = (
    fiyat1,
    fiyat2,
    StokLastPrice,
    CurrencyLastPrice,
    GoldLastPrice,
    CryptoLastPrice,
    FundLastPrice,
  ) => {
    return fiyat1 || fiyat2
      ? `${fiyat1 || '0'}.${fiyat2 || '0'}`
      : StokLastPrice ||
          CurrencyLastPrice ||
          GoldLastPrice ||
          CryptoLastPrice ||
          FundLastPrice ||
          '0.0';
  };

  const handleAddOrUpdateAsset = async isUpdate => {
    const currentDate = getCurrentDateFormatted();
    const totalQuantity = calculateTotalQuantity(miktar1, miktar2);
    const totalPrice = calculateTotalPrice(
      fiyat1,
      fiyat2,
      StockDetailData?.lastPrice,
      CurrencyDetailData?.lastPrice,
      GoldDetailData?.lastPrice,
      CryptoDetailData?.lastPrice,
      FundDetailData?.lastPrice,
    );

    const assetData = {
      type:
        text === 'Döviz'
          ? 'Currency'
          : text === 'Hisse Senedi'
          ? 'Stock'
          : text === 'Fon'
          ? 'Fund'
          : text === 'Kripto'
          ? 'Crypto'
          : text === 'Altın'
          ? 'Gold'
          : text === 'Türk Lirası'
          ? 'TurkishLira'
          : text,
      name: fullName,
      quantity: totalQuantity,
      purchasePrice: totalPrice,
      purchaseDate: selectedDate || currentDate,
    };

    const process = isUpdate ? updateAssetProcess : addAssetProcess;
    await dispatch(
      process({
        portfolioId: defaultPortfolioId,
        assetId: isUpdate ? AssetDetailsData?.assetDetails?.assetId : undefined,
        data: assetData,
      }),
    );

    if (!isUpdate) {
      setMiktar1('');
      setMiktar2('');
      setFiyat1('');
      setFiyat2('');
      setSelectedDate('');
    }
  };

  const handleAddAsset = async () => {
    await handleAddOrUpdateAsset(false);
  };

  const handleUpdateAsset = async () => {
    await handleAddOrUpdateAsset(true);
  };

  //BU KISIM İÇİN REDUCER OLUŞTURULACAK

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (StockDetailData) {
          await dispatch(
            getStockDetailProcess({name: code, day: selectedValue}),
          );
        } else if (CurrencyDetailData) {
          await dispatch(
            getCurrencyDetailProcess({name: code, day: selectedValue}),
          );
        } else if (CryptoDetailData) {
          await dispatch(
            getCryptoDetailProcess({name: code, day: selectedValue}),
          );
        } else if (FundDetailData) {
          await dispatch(
            getFundDetailProcess({name: code, day: selectedValue}),
          );
        } else if (GoldDetailData) {
          await dispatch(
            getGoldDetailProcess({day: selectedValue, data: {name: code}}),
          );
        } else if (AssetDetailsData) {
          await dispatch(
            getAssetDetailsProcess({
              data: {
                portfolioId: AssetDetailsData?.portfolioId,
                assetId: AssetDetailsData?.assetDetails?.assetId,
                type: AssetDetailsData?.assetDetails?.type,
                name: AssetDetailsData?.assetDetails?.name,
                numberOfDays: selectedValue,
              },
            }),
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedValue]);

  const reverseArray = data => {
    return Array.isArray(data) ? data.slice().reverse() : data;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradientContainer>
        {StokLoading === true ||
        CurrencyLoading === true ||
        GoldLoading === true ||
        CryptoLoading === true ||
        AssetDetailsLoading === true ? (
          <Loader />
        ) : (
          <>
            <Header text={code} backIcon />
            <View style={style.descContainer}>
              <Text style={style.descText}>{desc}</Text>
            </View>

            <View style={style.lineChartContainer}>
              <LineChartt
                width={windowWidth * 0.75}
                height={windowHeight * 0.2}
                lcData={
                  reverseArray(StockDetailData?.data) ||
                  reverseArray(CurrencyDetailData?.data) ||
                  reverseArray(CryptoDetailData?.data) ||
                  reverseArray(GoldDetailData?.data) ||
                  reverseArray(FundDetailData?.data) ||
                  reverseArray(AssetDetailsData?.historicalData)
                }
              />
            </View>

            <View style={style.options}>
              <TouchableOpacity
                style={style.timePeriodContainer}
                onPress={() => setTimePeriodVisible(true)}>
                <Text>{timePeriod}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setIsAddModalVisible(true)}>
                <Icon
                  name={'fit-to-screen-outline'}
                  size={30}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>

            <LinearGradient
              colors={['#10001D', '#44007A']}
              style={style.inputAreaContainer}>
              <InputContainer
                text={t('assetDetailScreen.amount')}
                typeText={GoldDetailData ? t('common.quantity') : code}
                value1={miktar1}
                onChangeText1={setMiktar1}
                value2={miktar2}
                onChangeText2={setMiktar2}
              />
              <InputContainer
                text={t('assetDetailScreen.price')}
                typeText={'₺'}
                value1={fiyat1}
                onChangeText1={setFiyat1}
                value2={fiyat2}
                onChangeText2={setFiyat2}
              />

              <View style={style.innerAreaContainer}>
                <Text style={style.headerText}>
                  {t('assetDetailScreen.date')}:
                </Text>
                <View style={style.calendarContainer}>
                  <TextInput
                    style={{...style.input1, marginRight: 4}}
                    editable={false}
                    textAlign="center"
                    value={selectedDate}
                    onChangeText={setSelectedDate}
                  />
                  <TouchableOpacity
                    onPress={() => setDatePickerVisibility(true)}>
                    <Icon name={'calendar-month'} color={'#958EBF'} size={30} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={
                  page == 'update'
                    ? {
                        ...style.buttonsContainer,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingRight: 50,
                      }
                    : style.buttonsContainer
                }>
                {/* <TouchableOpacity
                  style={style.saveButtonContainer}
                  onPress={
                    page == 'update' ? handleUpdateAsset : handleAddAsset
                  }
                  disabled={!miktar1 && !miktar2}>
                  <LinearGradient
                    colors={
                      !miktar1 && !miktar2
                        ? ['#007029', '#007029']
                        : ['#05A04D', '#007029']
                    }
                    style={style.saveButton}>
                    <Text
                      style={[
                        style.saveButtonText,
                        !miktar1 &&
                          !miktar2 && {...style.saveButtonText, color: 'grey'},
                      ]}>
                      {page == 'update'
                        ? 'Güncelle'
                        : t('assetDetailScreen.save')}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity> */}
                <Button
                  disabled={!miktar1 && !miktar2}
                  color1={!miktar1 && !miktar2 ? '#007029' : '#05A04D'}
                  color2={'#007029'}
                  text={page == 'update' ? 'Alış' : t('assetDetailScreen.save')}
                  textStyle={[
                    style.saveButtonText,
                    !miktar1 &&
                      !miktar2 && {...style.saveButtonText, color: 'grey'},
                  ]}
                  buttonStyle={style.buttonStyle}
                  onPress={
                    page == 'update' ? handleUpdateAsset : handleAddAsset
                  }
                />
                {page == 'update' && (
                  <Button
                    color1={'#150193'}
                    color2={'#6354BA'}
                    text={'Satış'}
                    textStyle={style.buttonText}
                    buttonStyle={style.buttonStyle}
                    onPress={() => {
                      console.log('tıklandıı');
                      setIsAlertModalVisible(true);
                    }}
                  />
                  // <TouchableOpacity
                  //   style={style.deleteContainer}
                  //   onPress={() => {
                  //     setIsAlertModalVisible(true);
                  //   }}>
                  //   <Icon
                  //     name={'delete-outline'}
                  //     color={colors.white}
                  //     size={25}
                  //   />
                  // </TouchableOpacity>
                )}
              </View>
            </LinearGradient>
          </>
        )}
      </LinearGradientContainer>

      <AssetSellModal
        isModalVisible={isAlertModalVisible}
        setIsModalVisible={setIsAlertModalVisible}
      />
      <CalendarModal
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <FullScreenLineChartModal
        isAddModalVisible={isAddModalVisible}
        setIsAddModalVisible={setIsAddModalVisible}
        lcData={
          reverseArray(StockDetailData?.data) ||
          reverseArray(CurrencyDetailData?.data) ||
          reverseArray(CryptoDetailData?.data) ||
          reverseArray(FundDetailData?.data) ||
          reverseArray(GoldDetailData?.data) ||
          reverseArray(AssetDetailsData?.historicalData)
        }
        header={code}
      />

      <TimePeriodModal
        isModalVisible={timePeriodVisible}
        setIsModalVisible={setTimePeriodVisible}
        selectedItem={timePeriod}
        setSelectedItem={setTimePeriod}
        setSelectedValue={setSelectedValue}
      />
      {/* <AlertModal
        handleDelete={handleDeleteAsset}
        isModalVisible={isAlertModalVisible}
        setIsModalVisible={setIsAlertModalVisible}
      /> */}
    </ScrollView>
  );
};
