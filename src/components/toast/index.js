import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';

export const toastComp = (type, text1) => {
  console.log('popopopopopopo', text1);

  Toast.show({
    type,
    text1,
    position: 'top',
    visibilityTime: 3500,
  });
};
