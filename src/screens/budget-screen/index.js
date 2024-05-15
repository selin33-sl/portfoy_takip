import {View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  Button,
  Header,
  InputContainer,
  LinearGradientContainer,
  Loader,
  PortfoyListModal,
} from '../../components';
import style from './style';
import {CustomArea} from '../../components/customArea';
import {
  addMoneyToBudgetProcess,
  getBudgetDetailsProcess,
  getPortfolioDetailsProcess,
} from '../../api';

export const BudgetScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [miktar1, setMiktar1] = useState('');
  const [miktar2, setMiktar2] = useState('');
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);

  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);
  const {data: AllPortfolioData} = useSelector(state => state.getAllPortfolio);
  const {data: BudgetDetailsData} = useSelector(state => state.getBudget);
  const {data: PortfolioDetailsData, isLoading: PortfolioDetailsLoading} =
    useSelector(state => state.getPortfolioDetails);
  console.log('BudgetDetailsData', BudgetDetailsData);

  useEffect(() => {
    if (!isPortfoyListModalVisible) {
      dispatch(getPortfolioDetailsProcess({id: defaultPortfolioId}));
    }
  }, [isPortfoyListModalVisible]);

  useEffect(() => {
    console.log('ÇALIŞTI');
    dispatch(getBudgetDetailsProcess({id: defaultPortfolioId}));
  }, [defaultPortfolioId]);

  const calculateTotalQuantity = (miktar1, miktar2) => {
    return miktar1 || miktar2 ? `${miktar1 || '0'}.${miktar2 || '0'}` : '0.0';
  };

  const handleAddMoney = async () => {
    const totalQuantity = calculateTotalQuantity(miktar1, miktar2);
    await dispatch(
      addMoneyToBudgetProcess({
        data: {value: parseFloat(totalQuantity)},
        portfolioId: defaultPortfolioId,
      }),
    ),
      await dispatch(getBudgetDetailsProcess({id: defaultPortfolioId}));
  };

  return (
    <LinearGradientContainer>
      {PortfolioDetailsLoading ? (
        <Loader />
      ) : (
        <>
          <Header text={t('headers.assetsHeaders.turkisLira')} backIcon />

          <View style={style.innerContainer}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
              <View style={style.elipsContainer}>
                <CustomArea
                  totalProfitValue={BudgetDetailsData?.budget?.totalProfitValue}
                  totalProfitPercentage={
                    BudgetDetailsData?.budget?.totalProfitPercentage
                  }
                  option={3}
                  portfoyName={PortfolioDetailsData?.portfolio?.name}
                  totalAmount={
                    BudgetDetailsData
                      ? BudgetDetailsData?.budget?.totalValue
                      : '10000'
                  }
                  totalChange={'10000'}
                  onPress={() => setIsPortfoyListModalVisible(true)}
                />
              </View>
              <LinearGradient
                colors={['#10001D', '#44007A']}
                style={style.inputAreaContainer}>
                <InputContainer
                  text={t('assetDetailScreen.amount')}
                  typeText={'₺'}
                  value1={miktar1}
                  onChangeText1={setMiktar1}
                  value2={miktar2}
                  onChangeText2={setMiktar2}
                />
                <View style={style.buttonContainer}>
                  <Button
                    color1={'#150193'}
                    color2={'#6354BA'}
                    text={'Güncelle'}
                    textStyle={style.buttonText}
                    buttonStyle={style.buttonStyle}
                    onPress={() => handleAddMoney()}
                  />
                  {/* <Button
                    color1={'#150193'}
                    color2={'#6354BA'}
                    text={'Çıkar'}
                    textStyle={style.buttonText}
                    buttonStyle={style.buttonStyle}
                    onPress={() => setIsModalVisible(false)}
                  /> */}
                </View>
              </LinearGradient>
            </ScrollView>
          </View>
        </>
      )}
      <PortfoyListModal
        isModalVisible={isPortfoyListModalVisible}
        setIsModalVisible={setIsPortfoyListModalVisible}
        list={true}
        data={AllPortfolioData}
      />
    </LinearGradientContainer>
  );
};
