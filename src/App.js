import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {AppStack} from './navigators';
import {
  notificationListener,
  requestUserPermission,
} from './utils/request-user-permission';
import messaging from '@react-native-firebase/messaging';

export const App = () => {
  Orientation.lockToPortrait();

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  // Arka planda gelen bildirimleri işleyen fonksiyon
  const backgroundMessageHandler = async remoteMessage => {
    console.log('Arka planda gelen bildirim:', remoteMessage);
  };

  // Arka planda mesaj işleyicisini ayarla
  messaging().setBackgroundMessageHandler(backgroundMessageHandler);
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
