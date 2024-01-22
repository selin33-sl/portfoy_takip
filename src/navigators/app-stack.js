import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {BottomTabs} from './bottom-tabs';
import Toast from 'react-native-toast-message';
import {toastComp} from '../components';
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

  useEffect(() => {
    if (!isConnected) {
      toastComp('error', 'Lütfen internet bağlantınızı kontrol ediniz..');
    }
  }, [isConnected]);

  return (
    <NavigationContainer>
      {isAuthenticated == '-1' ? (
        <AuthStack />
      ) : isAuthenticated == '0' ? (
        <AuthStack />
      ) : isAuthenticated == '1' ? (
        <BottomTabs />
      ) : null}

      <Toast />
    </NavigationContainer>
  );
};
