import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {useTranslation} from 'react-i18next';
import style from './style';

export const SearchBar = ({value, onClear, onChangeText}) => {
  const {t} = useTranslation();

  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style.searchBar}
        placeholder={t('common.search')}
        placeholderTextColor={'grey'}
      />
      {value ? (
        <Icon
          name="close"
          size={20}
          color={'grey'}
          onPress={onClear}
          style={style.clearIcon}
        />
      ) : null}
    </View>
  );
};
