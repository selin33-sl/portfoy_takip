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
      <LinearGradient colors={['#10001D', '#44007A']} style={style.container}>
        <View
          style={{
            ...style.iconContainer,
            backgroundColor: backgroundColor,
          }}>
          {doviz ? (
            <FontistoIcon name={iconName} size={28} color={'white'} />
          ) : (
            <Icon name={iconName} size={28} color={'white'} />
          )}
        </View>
        <Text style={style.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
