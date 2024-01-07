import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {colors} from '../../theme';

export const LinearGradientContainer = ({children}) => {
  return (
    <LinearGradient
      colors={[colors.primary1, colors.primary2]}
      style={style.container}>
      {children}
    </LinearGradient>
  );
};
