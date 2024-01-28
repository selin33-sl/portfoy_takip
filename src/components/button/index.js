import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import style from './style';

export const Button = ({onPress, text, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style.button, buttonStyle]}>
      <Text style={[style.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
