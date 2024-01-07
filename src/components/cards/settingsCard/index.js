import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

export const SettingsCard = ({onPress, text}) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View style={style.innerContainer}>
        <View style={style.row1}>
          <Text style={style.text1}>{text}</Text>
        </View>
      </View>
      <View style={style.iconContainer}>
        <Icon name={'chevron-right'} size={31} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};
