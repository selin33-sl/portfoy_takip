import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import style from './style';

export const CustomArea = ({
  portfoyName,
  totalAmount,
  dailyChange,
  totalChange,
  onPress,
}) => {
  return (
    <View style={style.elips}>
      <TouchableOpacity style={style.headerElips} onPress={onPress}>
        <Text>{portfoyName}</Text>
        <Icon name={'chevron-down'} color={'white'} size={30} />
      </TouchableOpacity>

      <View style={style.innerElips}>
        <Text style={style.numberText}>{totalAmount} TL</Text>

        <View style={style.rateContainer}>
          <TouchableOpacity style={style.rateButton}>
            <Text style={style.text1}>Günlük</Text>
            <LinearGradient
              colors={['#746F96', '#AEAEAE']}
              style={style.innerRate}>
              <Text>{dailyChange}</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={style.rateButton}>
            <Text style={style.text1}>Toplam</Text>
            <LinearGradient
              colors={['#746F96', '#AEAEAE']}
              style={style.innerRate}>
              <Text>{totalChange}</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={style.rateButton}>
            <Text style={style.text1}>Grafik</Text>
            <LinearGradient
              colors={['#746F96', '#AEAEAE']}
              style={style.innerRateGrafik}>
              <Icon name={'chart-line'} size={25} color={'#00ff83'} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
