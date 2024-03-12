import {View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  Header,
  InputContainer,
  LinearGradientContainer,
  Loader,
  PortfoyListModal,
} from '../../components';
import style from './style';
import {CustomArea} from '../../components/customArea';
import {getPortfolioDetailsProcess} from '../../api';

export const BudgetScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [miktar1, setMiktar1] = useState('');
  const [miktar2, setMiktar2] = useState('');
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);

  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);
  const {data: AllPortfolioData} = useSelector(state => state.getAllPortfolio);
  const {data: PortfolioDetailsData, isLoading: PortfolioDetailsLoading} =
    useSelector(state => state.getPortfolioDetails);
  console.log('PortfolioDetailsData', PortfolioDetailsData);

  useEffect(() => {
    if (!isPortfoyListModalVisible) {
      dispatch(getPortfolioDetailsProcess({id: defaultPortfolioId}));
    }
  }, [isPortfoyListModalVisible]);
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
                  option={3}
                  portfoyName={PortfolioDetailsData?.portfolio?.name}
                  totalAmount={'10000'}
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
