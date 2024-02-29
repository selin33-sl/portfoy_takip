import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {Headline} from 'react-native-paper';

export const NotFound = ({text}) => {
  return <Headline style={style.text}>{text}</Headline>;
};
