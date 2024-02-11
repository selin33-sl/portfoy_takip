import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';

export const Button = ({
  onPress,
  text,
  buttonStyle,
  textStyle,
  color1,
  color2,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[color1, color2]}
        style={[style.button, buttonStyle]}>
        <Text style={[style.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
