import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

export const VarlikListCard = ({
  onPress,
  code,
  fullName,
  percent,
  fullNameText,
  percentText,
  price,
}) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View style={style.innerContainer}>
        <View style={style.row1}>
          <Text style={style.text1}>{code}</Text>
          <Text style={style.text1}>{price}</Text>
        </View>
        <View
          style={
            fullName ? style.row2 : {...style.row2, justifyContent: 'flex-end'}
          }>
          {fullName ? <Text style={style.text2}>{fullNameText}</Text> : null}
          {percent ? (
            <Text
              style={{
                ...style.text2,
                color: parseFloat(percentText) < 0 ? 'red' : 'green',
              }}>
              {percentText} %
            </Text>
          ) : null}
        </View>
      </View>
      <View style={style.iconContainer}>
        <Icon name={'chevron-right'} size={31} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};
