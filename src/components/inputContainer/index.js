import {View, Text, TextInput} from 'react-native';
import React from 'react';
import style from './style';

export const InputContainer = ({
  text,
  typeText,
  value1,
  onChangeText1,
  value2,
  onChangeText2,
}) => {
  return (
    <View style={style.innerAreaContainer}>
      <Text style={style.headerText}>{text}:</Text>
      <View style={style.inputContainer}>
        <TextInput
          value={value1}
          onChangeText={onChangeText1}
          style={style.input1}
          textAlign="right"
          keyboardType="numeric"></TextInput>
        <Text style={style.virgul}>,</Text>
        <TextInput
          textAlign="left"
          value={value2}
          onChangeText={onChangeText2}
          style={style.input2}
          keyboardType="numeric"></TextInput>
        <View style={style.typeContainer}>
          <Text style={style.typeText}>{typeText}</Text>
        </View>
      </View>
    </View>
  );
};
