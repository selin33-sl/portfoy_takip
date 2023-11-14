import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

export const VarlikListCard = ({onPress}) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View style={style.innerContainer}>
        <View style={style.row1}>
          <Text style={style.text1}>USD</Text>
          <Text style={style.text1}>28,35</Text>
        </View>
        <View style={style.row2}>
          <Text style={style.text2}>United States Dollar</Text>
          <Text style={style.text2}>(%0)</Text>
        </View>
      </View>
      <View style={style.iconContainer}>
        <Icon name={'chevron-right'} size={31} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};
