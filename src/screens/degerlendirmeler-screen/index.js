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

import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme';

export const DegerlendirmelerScreen = () => {
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

  const [option, setOption] = useState('1');
  const [isPortfoyListModalVisible, setIsPortfoyListModalVisible] =
    useState(false);
  const [isPortfoyAddModalVisible, setIsPortfoyAddModalVisible] =
    useState(false);

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
            text={t('reviewsScreen.totalCost')}
            onPress={() => setOption('2')}
          />
          <CircleOptionCard
            color={option == '3' ? '#6D688C' : '#AEAEAE'}
            text={t('reviewsScreen.averageCost')}
            onPress={() => setOption('3')}
          />
        </View>

        <View style={style.elipsContainer}>
          <View style={style.elips}>
            <TouchableOpacity
              style={style.headerElips}
              onPress={() => setIsPortfoyListModalVisible(true)}>
              <Text>PORTFÖY_1</Text>
              <Icon name={'chevron-down'} color={'white'} size={30} />
            </TouchableOpacity>

            <View style={style.innerElips}>
              <Text style={style.numberText}>15.855 TL</Text>

              <View style={style.rateContainer}>
                <TouchableOpacity style={style.rateButton}>
                  <Text style={style.text1}>{t('reviewsScreen.daily')}</Text>
                  <LinearGradient
                    colors={['#746F96', '#AEAEAE']}
                    style={style.innerRate}>
                    <Text>%21,1</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={style.rateButton}>
                  <Text style={style.text1}>{t('reviewsScreen.total')}</Text>
                  <LinearGradient
                    colors={['#746F96', '#AEAEAE']}
                    style={style.innerRate}>
                    <Text>%4,3</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={style.rateButton}>
                  <Text style={style.text1}>{t('reviewsScreen.graph')}</Text>
                  <LinearGradient
                    colors={['#746F96', '#AEAEAE']}
                    style={style.innerRateGrafik}>
                    <Icon name={'chart-line'} size={25} color={'#00ff83'} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
      <PortfoyListModal
        isModalVisible={isPortfoyListModalVisible}
        setIsModalVisible={setIsPortfoyListModalVisible}
        isAddModalVisible={isPortfoyAddModalVisible}
        setIsAddModalVisible={setIsPortfoyAddModalVisible}
      />
    </LinearGradientContainer>
  );
};
