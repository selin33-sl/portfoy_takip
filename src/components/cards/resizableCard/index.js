import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import style from './style';
import {colors} from '../../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAssetDetailsProcess} from '../../../api';
import {resetAssetDetails} from '../../../redux/slice/portfolio/get-asset-details-slice';

const windowHeight = Dimensions.get('window').height;
export const ResizableCard = ({
  borderColor,
  tür,
  hidden,
  sendItem,
  onPress,
  infoModalOnPress,
}) => {
  const {t} = useTranslation();
  const [code, setCode] = useState('');
  const [commonItem, setCommonItem] = useState();
  const dispatch = useDispatch();

  console.log('COMMON:', commonItem);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const selectedPortfolioId = await AsyncStorage.getItem(
  //         'selectedPortfolioId',
  //       );

  //       dispatch(
  //         getAssetDetailsProcess({
  //           portfolioId: selectedPortfolioId,
  //           assetId: commonItem?._id,
  //           type: commonItem?.type,
  //           name: commonItem?.name,
  //         }),
  //       );
  //     } catch (error) {
  //       console.error('Error fetching selectedPortfolioId:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [isModalVisible2, setModalVisible2] = useState(false);
  const [modalHeight, setModalHeight] = useState(windowHeight * 0.08); // Modalın başlangıç yüksekliği
  const numItems = sendItem?.length;
  const toggleModal = () => {
    if (isModalVisible2) {
      // Modal kapanırken yüksekliği sıfırla
      setModalHeight(windowHeight * 0.08);
    }
    setModalVisible2(!isModalVisible2);
  };

  const expandModal = () => {
    // Modalı açarken yüksekliği artır
    const newHeight = windowHeight * 0.08 + numItems * windowHeight * 0.08;
    setModalHeight(newHeight);
    toggleModal();
    setModalVisible2(!isModalVisible2);
  };

  const SmallCard = ({name, price, adet, profit, assetId, item}) => {
    return (
      <TouchableOpacity
        style={style.detailContainer}
        onPress={() => onPress(assetId)}>
        <View style={style.detail1}>
          <Text style={style.textDetailName}>{name}</Text>
          <Text style={style.textDetailPrice}>
            {hidden ? '****' : price} TL
          </Text>
        </View>
        <View style={style.detail2}>
          <Text style={style.textDetailNumber}>
            {hidden ? '****' : adet}
            {t('common.quantity')}
          </Text>
          <View style={style.profitInfoContainer}>
            <View
              style={{
                ...style.profitContainer,
                backgroundColor: profit > 0 ? 'green' : 'red',
              }}>
              <Text style={style.profitText}>{profit}%</Text>
            </View>
            <TouchableOpacity
              style={style.infoButtonContainer}
              onPress={async () => {
                const selectedPortfolioId = await AsyncStorage.getItem(
                  'selectedPortfolioId',
                );

                await dispatch(resetAssetDetails());
                infoModalOnPress();

                await dispatch(
                  getAssetDetailsProcess({
                    portfolioId: selectedPortfolioId,
                    assetId: item?._id,
                    type: item?.type,
                    name: item?.name,
                  }),
                );
              }}>
              <Icon name={'information-variant'} color={'black'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    const words = item?.name.split(' ');
    const name = words[0] ? words[0].trim() : '';

    return (
      <SmallCard
        item={item}
        name={name}
        price={item.totalAssetValue}
        adet={item.quantity}
        assetId={item._id}
        profit={item.profitPercentage}
      />
    );
  };

  return (
    <LinearGradient
      colors={['#10001D', '#44007A']}
      style={{
        ...style.container,
        borderColor: borderColor,
        height: isModalVisible2 ? toggleModal : expandModal,
      }}>
      <View
        style={{
          ...style.innerContainer,
          height: modalHeight,
        }}>
        <View style={style.halfContainer}>
          <Text style={style.text}>{tür}</Text>
          <TouchableOpacity
            style={style.button}
            onPress={isModalVisible2 ? toggleModal : expandModal}>
            <Icon
              name={isModalVisible2 ? 'chevron-up' : 'chevron-down'}
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        {isModalVisible2 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={sendItem}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </LinearGradient>
  );
};
