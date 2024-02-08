import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {BottomTabs} from './bottom-tabs';
import Toast from 'react-native-toast-message';
import {toastComp} from '../components';
import {AuthStack} from './auth-stack';
import {useDispatch, useSelector} from 'react-redux';
import {SplashScreen} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeAuthentication} from '../redux/slice/auth/login-slice';

export const AppStack = () => {
  const [isConnected, setIsConnected] = useState(true);
  const dispatch = useDispatch();
  // const isAuthenticated = 0;

  const {isAuthenticated} = useSelector(state => state.auth);

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log(accessToken, 'ACCESSTOKEN');
      const tokenCreationTime = await AsyncStorage.getItem('tokenCreationTime');
      const tokenCreationTimeUTC = new Date(parseInt(tokenCreationTime));

      const tokenCreationTimee = new Date(
        parseInt(tokenCreationTime),
      ).toLocaleString('tr-TR');

      const currentTimeUTC = new Date();
      const expirationTimeUTC = new Date(
        tokenCreationTimeUTC.getTime() + 1 * 24 * 60 * 60 * 1000,
      );

      if (accessToken && tokenCreationTimee) {
        if (currentTimeUTC >= expirationTimeUTC) {
          // Token süresi dolmuş, kullanıcıyı oturum açmaya yönlendirin.
          AsyncStorage.removeItem('accessToken');
          AsyncStorage.removeItem('tokenCreationTime');
          dispatch(changeAuthentication('0'));
        } else {
          // Token hala geçerli, oturumu açın.
          dispatch(changeAuthentication('1'));
        }
      } else {
        dispatch(changeAuthentication('0'));
      }
    };

    checkTokenExpiration();
  }, []);

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

  console.log('authhhhhhh', isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated == '-1' ? (
        <SplashScreen />
      ) : isAuthenticated == '0' ? (
        <AuthStack />
      ) : isAuthenticated == '1' ? (
        <BottomTabs />
      ) : null}

      <Toast />
    </NavigationContainer>

    // <NavigationContainer>
    //   {isAuthenticated == '-1' ? (
    //      <SplashScreen />
    //   ) : isAuthenticated == '0' ? (
    //     <AuthStack />
    //   ) : isAuthenticated == '1' ? (
    //     <BottomTabs />
    //   ) : null}

    //   <Toast />
    // </NavigationContainer>
  );
};
