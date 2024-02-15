import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  CircleOptionCard,
  Header,
  LinearGradientContainer,
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

export const DegerlendirmelerScreen = () => {
  const {t} = useTranslation();

  const [option, setOption] = useState('1');
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);
  const [isPortfoyAddModalVisible, setIsPortfoyAddModalVisible] =
    useState(false);

  const {data: PortfolioDetailsData, isLoading: PortfolioDetailsLoading} =
    useSelector(state => state.getPortfolioDetails);

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
      />
    );
  };

  return (
    <LinearGradientContainer>
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

        <View style={style.elipsContainer}>
          <CustomArea
            portfoyName={PortfolioDetailsData?.portfolio?.name}
            totalAmount={PortfolioDetailsData?.portfolio?.profitValue}
            totalChange={PortfolioDetailsData?.portfolio?.totalProfitPercentage}
            onPress={() => setIsPortfoyListModalVisible(true)}
          />
        </View>
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={PortfolioDetailsData?.portfolio?.portfolioDetails}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <PortfoyListModal
        isModalVisible={isPortfoyListModalVisible}
        setIsModalVisible={setIsPortfoyListModalVisible}
        isAddModalVisible={isPortfoyAddModalVisible}
        setIsAddModalVisible={setIsPortfoyAddModalVisible}
      />
    </LinearGradientContainer>
  );
};
