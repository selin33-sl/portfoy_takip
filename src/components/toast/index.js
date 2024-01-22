import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';

export const ToastComp = ({show, type, text1, text2, visibilityTime}) => {
  useEffect(() => {
    if (show) {
      Toast.show({
        type,
        text1,
        text2,
        position: 'top',
        visibilityTime,
      });
    }
  }, [show]);

  return null;
};
