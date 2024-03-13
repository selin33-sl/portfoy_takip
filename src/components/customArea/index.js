import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
import style from './style';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CustomArea = ({
  portfoyName,
  totalAmount,
  totalChange,
  onPress,
  option,
  totalProfitValue,
  totalProfitPercentage,
}) => {
  const {t} = useTranslation();
  const isCarousel = useRef(null);

  const data = [
    {text: 'Toplam Kar/Zarar', value: totalProfitPercentage},
    {text: 'Toplam Kar/Zarar Yüzdesi', value: `${totalProfitValue} %`},
  ];

  const renderItem = ({item, index}) => {
    console.log(item);
    return (
      <View
        key={index}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 'auto',
        }}>
        <Text style={{...style.text1}}>{item.text}</Text>
        <Text
          style={{
            ...style.carouselText,
            color: totalProfitValue > 0 ? '#00ff83' : 'red',
          }}>
          {item.value}
        </Text>
      </View>
    );
  };

  return (
    <View style={style.elips}>
      <TouchableOpacity style={style.headerElips} onPress={onPress}>
        <Text>{portfoyName}</Text>
        <Icon name={'chevron-down'} color={'white'} size={30} />
      </TouchableOpacity>

      <View style={style.innerElips}>
        <Text
          style={{
            ...style.numberText,
            color: totalAmount > 0 ? '#00ff83' : 'red',
          }}>
          {totalAmount} ₺
        </Text>
        {option === 1 ? (
          <View style={style.rateContainer}>
            <TouchableOpacity style={style.rateButton}>
              <Text style={style.text1}>{t('reviewsScreen.total')}</Text>
              <LinearGradient
                colors={['#746F96', '#AEAEAE']}
                style={style.innerRate}>
                <Text
                  style={{
                    ...style.totalChangeText,
                    color: totalChange > 0 ? '#00ff83' : 'red',
                  }}>
                  %{totalChange}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={style.rateButton}>
              <Text style={style.text1}>{t('reviewsScreen.graph')}</Text>
              <LinearGradient
                colors={['#746F96', '#AEAEAE']}
                style={style.innerRateGrafik}>
                <Icon name={'chart-line'} size={22} color={'#00ff83'} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : option === 3 ? (
          <View
            style={{
              height: windowHeight * 0.05,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: windowHeight * 0.02,
              width: 'auto',
            }}>
            <Carousel
              autoplay={true}
              autoplayInterval={3000}
              autoplayDelay={500}
              enableSnap={true}
              layout={'default'}
              layoutCardOffset={`1`}
              sliderWidth={windowWidth / 2}
              itemWidth={windowWidth / 2}
              ref={isCarousel}
              data={data}
              renderItem={renderItem}
              loop={true}
              activeSlideAlignment={'start'}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};
