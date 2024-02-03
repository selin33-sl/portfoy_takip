import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';
import {
  AlertModal,
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
  getCurrencyDetailProcess,
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

export const VarlikDetayScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {params: {page = 0, text, assetId} = {}} = useRoute();

  const [longName, setLongName] = useState('');
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
  const [loading, setlLoading] = useState(false);
  const [selectedPortfolioId, setSelectedPortfolioId] = useState('');

  const {
    data: StockDetailData,
    lastPrice: StokLastPrice,
    name: StokName,
    isLoading: StokLoading,
  } = useSelector(state => state.getStockDetail);

  const {
    data: CurrencyDetailData,
    lastPrice: CurrencyLastPrice,
    name: CurrencyName,
    isLoading: CurrencyLoading,
    description: CurrencyDescription,
  } = useSelector(state => state.getCurrencyDetail);
  const {data: GoldDetailData} = useSelector(state => state.getGoldDetail);
  const {status: DeleteAssetStatus, message: DeleteAssetMessage} = useSelector(
    state => state.removeAsset,
  );

  const {status: UpdateAssetStatus, message: UpdateAssetMessage} = useSelector(
    state => state.updateAsset,
  );

  const {status: AddAssetStatus, message: AddAssetMessage} = useSelector(
    state => state.addAsset,
  );

  const {data: AssetDetailsData} = useSelector(state => state.getAssetDetails);

  console.log('CurrencyLastPrice', CurrencyLastPrice);
  console.log('CurrencyDescription', CurrencyDescription);
  console.log('UpdateAssetMessage', UpdateAssetMessage);
  console.log('UpdateAssetStatus,', UpdateAssetStatus);

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

  useEffect(() => {
    if (StockDetailData && StockDetailData.length > 0) {
      const firstStockItem = StokName;
      setFullName(firstStockItem);
      const words = firstStockItem?.split(' ');
      setCode(words[0] ? words[0].trim() : '');
      setLongName(words.slice(1).join(' ').trim());
    } else if (CurrencyDetailData && CurrencyDetailData.length > 0) {
      setFullName(CurrencyName);
      setCode(CurrencyName);
      setLongName(CurrencyDescription);
    } else if (GoldDetailData && GoldDetailData.length > 0) {
      const firstStockItem = GoldDetailData[0];
      setCode(firstStockItem?.name);
      setLongName('');
    } else if (
      AssetDetailsData &&
      AssetDetailsData.assetDetails &&
      AssetDetailsData.assetDetails.type == 'Stock'
    ) {
      const firstStockItem = AssetDetailsData.assetDetails.name;
      setFullName(firstStockItem);
      const words = firstStockItem?.split(' ');
      setCode(words[0] ? words[0].trim() : '');
      setLongName(words.slice(1).join(' ').trim());
    }
  }, [StockDetailData, CurrencyDetailData]);

  useEffect(() => {
    if (AssetDetailsData?.assetDetails && page == 'update') {
      const quantityParts = AssetDetailsData?.assetDetails?.quantity.split('.');
      const quantityBeforeDot = quantityParts[0];
      const quantityAfterDot = quantityParts[1];

      const purchasePriceParts =
        AssetDetailsData?.assetDetails?.purchasePrice?.split('.');
      const purchasePriceBeforeDot = purchasePriceParts[0];
      const purchasePriceAfterDot = purchasePriceParts[1];

      setMiktar1(quantityBeforeDot);
      setMiktar2(quantityAfterDot);
      setFiyat1(purchasePriceBeforeDot);
      setFiyat2(purchasePriceAfterDot);
      setSelectedDate('05-12-2023');
    }
  }, [AssetDetailsData]);

  useEffect(() => {
    if (page == 'update' && StockDetailData) {
      dispatch(resetStockDetail());
    } else if (page == 'update' && CurrencyDetailData) {
      dispatch(resetCurrencyDetail());
    } else if (page != 'update' && AssetDetailsData) {
      dispatch(resetAssetDetails());
    }
  }, [StockDetailData, CurrencyDetailData, AssetDetailsData]);

  const handleDeleteAsset = async () => {
    const selectedPortfolioId = await AsyncStorage.getItem(
      'selectedPortfolioId',
    );
    await dispatch(
      deleteAssetProcess({
        portfolioId: selectedPortfolioId,
        assetId: assetId,
      }),
    );
    await dispatch(getPortfolioDetailsProcess({id: selectedPortfolioId}));

    setIsAlertModalVisible(false);

    navigation.goBack();
  };

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
  ) => {
    return fiyat1 || fiyat2
      ? `${fiyat1 || '0'}.${fiyat2 || '0'}`
      : StokLastPrice || CurrencyLastPrice || '0.0';
  };

  const handleAddOrUpdateAsset = async isUpdate => {
    const currentDate = getCurrentDateFormatted();
    const totalQuantity = calculateTotalQuantity(miktar1, miktar2);
    const totalPrice = calculateTotalPrice(
      fiyat1,
      fiyat2,
      StokLastPrice,
      CurrencyLastPrice,
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
        portfolioId: selectedPortfolioId,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedPortfolioId = await AsyncStorage.getItem(
          'selectedPortfolioId',
        );
        setSelectedPortfolioId(selectedPortfolioId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (StockDetailData) {
          await dispatch(
            getStockDetailProcess({name: code, day: selectedValue}),
          );
        } else if (CurrencyDetailData) {
          await dispatch(
            getCurrencyDetailProcess({name: CurrencyName, day: selectedValue}),
          );
        } else if (AssetDetailsData) {
          await dispatch(
            getAssetDetailsProcess({
              portfolioId: AssetDetailsData?.portfolioId,
              assetId: AssetDetailsData?.assetDetails?.assetId,
              type: AssetDetailsData?.assetDetails?.type,
              name: AssetDetailsData?.assetDetails?.name,
              day: selectedValue,
            }),
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedValue]);

  useEffect(() => {
    if (StokLoading) {
      setlLoading(true);
    }
    if (CurrencyLoading) {
      setlLoading(true);
    } else {
      setlLoading(false);
    }
  }, [StokLoading, CurrencyLoading]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradientContainer>
        {/* {loading ? (
          <Loader />
        ) : (
          <> */}
        <Header text={code} backIcon />
        <View style={style.descContainer}>
          <Text style={style.descText}>{longName}</Text>
        </View>

        <View style={style.lineChartContainer}>
          <LineChartt
            lcData={
              StockDetailData
                ? StockDetailData
                : CurrencyDetailData
                ? CurrencyDetailData
                : AssetDetailsData
                ? AssetDetailsData.historicalData
                : null
            }
            width={340}
            height={170}
          />
        </View>

        <View style={style.options}>
          <TouchableOpacity
            style={style.timePeriodContainer}
            onPress={() => setTimePeriodVisible(true)}>
            <Text>{timePeriod}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsAddModalVisible(true)}>
            <Icon name={'fit-to-screen-outline'} size={30} color={'white'} />
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
            typeText={'TL'}
            value1={fiyat1}
            onChangeText1={setFiyat1}
            value2={fiyat2}
            onChangeText2={setFiyat2}
          />

          <View style={style.innerAreaContainer}>
            <Text style={style.headerText}>{t('assetDetailScreen.date')}:</Text>
            <View style={style.calendarContainer}>
              <TextInput
                style={{...style.input1, marginRight: 4}}
                editable={false}
                textAlign="center"
                value={selectedDate}
                onChangeText={setSelectedDate}
              />
              <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
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
            <TouchableOpacity
              style={style.saveButtonContainer}
              onPress={page == 'update' ? handleUpdateAsset : handleAddAsset}
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
                  {page == 'update' ? 'Güncelle' : t('assetDetailScreen.save')}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {page == 'update' && (
              <TouchableOpacity
                style={style.deleteContainer}
                onPress={() => {
                  setIsAlertModalVisible(true);
                }}>
                <Icon name={'delete-outline'} color={colors.white} size={25} />
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </LinearGradientContainer>
      <CalendarModal
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <FullScreenLineChartModal
        isAddModalVisible={isAddModalVisible}
        setIsAddModalVisible={setIsAddModalVisible}
        lcData={StockDetailData}
        header={code}
      />

      <TimePeriodModal
        isModalVisible={timePeriodVisible}
        setIsModalVisible={setTimePeriodVisible}
        selectedItem={timePeriod}
        setSelectedItem={setTimePeriod}
        setSelectedValue={setSelectedValue}
      />
      <AlertModal
        handleDelete={handleDeleteAsset}
        isModalVisible={isAlertModalVisible}
        setIsModalVisible={setIsAlertModalVisible}
      />
    </ScrollView>
  );
};
