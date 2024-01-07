import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

export const VarlikListCard = ({
  onPress,
  code,
  first,
  second,
  firstText,
  secondText,
  color,
  price,
}) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View style={style.innerContainer}>
        <View style={style.row1}>
          <Text style={style.text1}>{code}</Text>
          <Text style={style.text1}>{price}</Text>
        </View>
        <View style={style.row2}>
          {first ? <Text style={style.text2}>{firstText}</Text> : null}
          {second ? (
            <Text style={{...style.text2, color: color}}>%{secondText}</Text>
          ) : null}
        </View>
      </View>
      <View style={style.iconContainer}>
        <Icon name={'chevron-right'} size={31} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};
