import {View, Text, TextInput, Dimensions} from 'react-native';
import React from 'react';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Controller} from 'react-hook-form';

const windowHeight = Dimensions.get('window').height;

export const TextinputCard = ({
  placeholder,
  name,
  iconName,
  keyboardType,
  secureText,
  control,
  rules,
  errors,
}) => {
  return (
    <View style={style.container}>
      <View
        style={
          errors
            ? {...style.iconContaienr, marginBottom: windowHeight * 0.02}
            : style.iconContaienr
        }>
        <Icon name={iconName} size={25} color={'white'} />
      </View>
      <View style={style.inputContainer}>
        <Controller
          control={control}
          rules={rules}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={
                errors
                  ? {...style.textInput, borderColor: 'red'}
                  : style.textInput
              }
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureText}
            />
          )}
          name={name}
        />
        {errors && <Text style={style.errorText}>{errors.message}</Text>}
      </View>
    </View>
  );
};
