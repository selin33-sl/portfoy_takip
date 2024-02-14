import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

export const BildirimAndLanguageCard = ({title, onPress, cartStyle}) => {
  return (
    <TouchableOpacity
      style={[style.cartContainer, cartStyle]}
      onPress={onPress}>
      <Text style={style.cartText}>{title}</Text>
    </TouchableOpacity>
  );
};
