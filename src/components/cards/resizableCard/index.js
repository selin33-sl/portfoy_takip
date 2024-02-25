import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import style from './style';
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
  especial,
  option,
}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {portfolioId: defaultPortfolioId} = useSelector(state => state.auth);

  console.log('small card itemm:', sendItem);

  const [isModalVisible2, setModalVisible2] = useState(false);
  const [modalHeight, setModalHeight] = useState(windowHeight * 0.05); // Modalın başlangıç yüksekliği
  const numItems = sendItem?.length;
  const toggleModal = () => {
    if (isModalVisible2) {
      // Modal kapanırken yüksekliği sıfırla
      setModalHeight(windowHeight * 0.05);
    }
    setModalVisible2(!isModalVisible2);
  };

  const expandModal = () => {
    // Modalı açarken yüksekliği artır
    const newHeight = 'auto';
    setModalHeight(newHeight);
    toggleModal();
    setModalVisible2(!isModalVisible2);
  };

  const SmallCard = ({name, price, adet, profit, assetId, item, total}) => {
    return (
      <TouchableOpacity
        style={
          especial
            ? {
                ...style.detailContainer,
                borderColor: item?.color,
                backgroundColor: item?.color,
              }
            : style.detailContainer
        }
        onPress={() => onPress(assetId, name)}>
        <View style={style.detail1}>
          <Text style={style.textDetailName}>{name}</Text>
          <Text
            style={
              option == 1
                ? {
                    ...style.textDetailPrice,
                    color: price > 0 ? 'green' : 'red',
                  }
                : style.textDetailPrice
            }>
            {hidden ? '****' : price} {option == 2 ? 'TL/Adet' : 'TL'}
          </Text>
        </View>
        <View style={style.detail2}>
          <Text style={style.textDetailNumber}>
            {hidden ? '****' : adet}
            {t('common.quantity')}
          </Text>
          <View style={style.profitInfoContainer}>
            {option == 1 ? (
              <View
                style={{
                  ...style.profitContainer,
                  backgroundColor: profit > 0 ? 'green' : 'red',
                }}>
                <Text style={style.profitText}>{profit}%</Text>
              </View>
            ) : option == 2 ? (
              <Text style={style.textDetailNumber}>{total} TL</Text>
            ) : (
              <>
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
                    await dispatch(resetAssetDetails());
                    infoModalOnPress();

                    await dispatch(
                      getAssetDetailsProcess({
                        portfolioId: defaultPortfolioId,
                        assetId: item?._id,
                        type: item?.type,
                        name: item?.name,
                        day: 1,
                      }),
                    );
                  }}>
                  <Icon
                    name={'information-variant'}
                    color={'black'}
                    size={20}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    console.log('İİTTTEEMM', item.color);
    return (
      <SmallCard
        item={item}
        name={item?.name}
        price={
          option == 1
            ? item.purchasePrice
            : option == 2
            ? item.profitValue
            : item.totalAssetValue
        }
        adet={item.quantity}
        total={item.totalPurchasePrice}
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
        height: isModalVisible2 ? 'auto' : windowHeight * 0.08,
        // maxHeight: isModalVisible2 ? toggleModal : expandModal,
      }}>
      <View
        style={{
          ...style.innerContainer,
          minHeight: modalHeight,
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
            scrollEnabled={false}
          />
        )}
      </View>
    </LinearGradient>
  );
};
