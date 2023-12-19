import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

export const BildirimCard = ({title, onPress}) => {
  return (
    <TouchableOpacity style={style.cartContainer} onPress={onPress}>
      <Text style={style.cartText}>{title}</Text>
    </TouchableOpacity>
  );
};
