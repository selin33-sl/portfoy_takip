import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';

export const ToastCompSuccess = ({show, text1, text2}) => {
  useEffect(() => {
    if (show) {
      Toast.show({
        type: 'success',
        text1: text1,
        text2: text2,
        position: 'top',
        visibilityTime: 3000,
      });
    }
  }, [show]);

  return null;
};

export const ToastCompError = ({show, text1, text2}) => {
  useEffect(() => {
    if (show) {
      Toast.show({
        type: 'error',
        text1: text1,
        text2: text2,
        position: 'top',
        visibilityTime: 3500,

        // text2Style: {
        //     fontSize: 5, // Özel fontsize değeri
        // },
        // text2Style: {
        //     fontSize: 5, // Özel fontsize değeri
        // },
      });
    }
  }, [show]);

  return null;
};
