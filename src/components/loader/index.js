import React from 'react';
import style from './style';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../theme';

export const Loader = () => {
  console.log('şuanda buradaaa');
  return (
    <ActivityIndicator
      style={style.loadingIndicator}
      size="large"
      color={colors.white}
    />
  );
};
