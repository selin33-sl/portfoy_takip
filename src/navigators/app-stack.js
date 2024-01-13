import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {BottomTabs} from './bottom-tabs';
import Toast from 'react-native-toast-message';
import {ToastCompError} from '../components';
import {AuthStack} from './auth-stack';
import {useDispatch, useSelector} from 'react-redux';

export const AppStack = () => {
  const [isConnected, setIsConnected] = useState(true);
  // const isAuthenticated = 0;

  const {isAuthenticated} = useSelector(state => state.auth);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated == '-1' ? (
        <AuthStack />
      ) : isAuthenticated == '0' ? (
        <AuthStack />
      ) : isAuthenticated == '1' ? (
        <BottomTabs />
      ) : null}

      <ToastCompError
        show={!isConnected}
        text1="İnternet Bağlantısı Yok"
        text2="Lütfen internet bağlantınızı kontrol ediniz."
      />
      <Toast />
    </NavigationContainer>
  );
};
