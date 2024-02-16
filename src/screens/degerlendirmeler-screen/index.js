import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  CircleOptionCard,
  Header,
  LinearGradientContainer,
  Loader,
  NotFound,
  PortfoyListModal,
  ResizableCard,
} from '../../components';
import style from './style';
import {images} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme';
import {CustomArea} from '../../components/customArea';
import {getPortfolioDetailsProcess} from '../../api';

export const DegerlendirmelerScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [option, setOption] = useState('1');
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);

  const {data: PortfolioDetailsData, isLoading: PortfolioDetailsLoading} =
    useSelector(state => state.getPortfolioDetails);
  const {data: AllPortfolioData} = useSelector(state => state.getAllPortfolio);
  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);

  console.log('değişti mi', defaultPortfolioId);

  useEffect(() => {
    if (!isPortfoyListModalVisible) {
      dispatch(getPortfolioDetailsProcess({id: defaultPortfolioId}));
    }
  }, [isPortfoyListModalVisible]);

  const renderItem = ({item, index}) => {
    return (
      <ResizableCard
        onPress={() => {}}
        borderColor={
          PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.color
        }
        tür={PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.type}
        sendItem={
          PortfolioDetailsData?.portfolio?.portfolioDetails[index]?.assets
        }
        reviews={true}
        option={option}
      />
    );
  };

  return (
    <LinearGradientContainer>
      {PortfolioDetailsLoading ? (
        <Loader />
      ) : (
        <>
          <Header text={t('headers.reviews')} />

          <View style={style.innerContainer}>
            <View style={style.optionsContainer}>
              <CircleOptionCard
                color={option == '1' ? '#6D688C' : '#AEAEAE'}
                text={t('reviewsScreen.profit/loss')}
                onPress={() => setOption('1')}
              />

              <CircleOptionCard
                color={option == '2' ? '#6D688C' : '#AEAEAE'}
                text={t('reviewsScreen.averageCost')}
                onPress={() => setOption('2')}
              />
            </View>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
              <View style={style.elipsContainer}>
                <CustomArea
                  option={option}
                  portfoyName={PortfolioDetailsData?.portfolio?.name}
                  totalAmount={
                    option == 1
                      ? PortfolioDetailsData?.portfolio?.profitValue
                      : PortfolioDetailsData?.portfolio?.totalPurchaseValue
                  }
                  totalChange={
                    PortfolioDetailsData?.portfolio?.totalProfitPercentage
                  }
                  onPress={() => setIsPortfoyListModalVisible(true)}
                />
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
            </ScrollView>
          </View>

          <PortfoyListModal
            isModalVisible={isPortfoyListModalVisible}
            setIsModalVisible={setIsPortfoyListModalVisible}
            list={true}
            data={AllPortfolioData}
          />
        </>
      )}
    </LinearGradientContainer>
  );
};
