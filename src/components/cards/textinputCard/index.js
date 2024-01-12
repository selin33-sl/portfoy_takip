import {View, Text, TextInput} from 'react-native';
import React from 'react';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const TextinputCard = ({
  placeholder,
  name,
  keyboardType,
  value,
  setValue,
  secureText,
}) => {
  return (
    <View style={style.container}>
      <View style={style.iconContaienr}>
        <Icon name={name} size={25} color={'white'} />
      </View>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={style.textInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
      />
    </View>
  );
};
