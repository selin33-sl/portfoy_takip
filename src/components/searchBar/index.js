import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import style from './style';

export const SearchBar = ({value, onClear, onChangeText}) => {
  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style.searchBar}
        placeholder="Ara"
        placeholderTextColor={'grey'}
      />
      {value ? (
        <Icon
          name="close"
          size={20}
          color={'red'}
          onPress={onClear}
          style={style.clearIcon}
        />
      ) : null}
    </View>
  );
};
