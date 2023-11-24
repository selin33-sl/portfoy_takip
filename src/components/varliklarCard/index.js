import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

export const VarliklarCard = ({
  backgroundColor,
  text,
  iconName,
  doviz,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={['#B65CFF', '#21003D']} style={style.container}>
        <View
          style={{
            ...style.iconContainer,
            borderColor: backgroundColor,
          }}>
          {doviz ? (
            <FontistoIcon name={iconName} size={35} color={'white'} />
          ) : (
            <Icon name={iconName} size={35} color={'white'} />
          )}
        </View>
        <Text style={style.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
