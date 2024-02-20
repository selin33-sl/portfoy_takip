import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
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
  const [isPasswordVisible, setPasswordVisibility] = useState(!secureText);

  const togglePasswordVisibility = () => {
    console.log(secureText);
    setPasswordVisibility(!isPasswordVisible);
  };
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
            <>
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
                secureTextEntry={!isPasswordVisible}
              />

              {secureText && (
                <View style={style.passworVisibleButton}>
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icon
                      name={isPasswordVisible ? 'eye-off' : 'eye'}
                      size={20}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
          name={name}
        />

        {errors && <Text style={style.errorText}>{errors.message}</Text>}
      </View>
    </View>
  );
};
