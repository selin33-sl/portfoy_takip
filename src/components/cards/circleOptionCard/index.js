import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import style from './style';

export const CircleOptionCard = ({text, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...style.container,
          backgroundColor: color,
        }}>
        <Text style={style.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
