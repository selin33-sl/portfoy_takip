import {DeviceEventEmitter} from 'react-native';
import React from 'react';
import Orientation from 'react-native-orientation-locker';
import {AppStack} from './navigators/app-stack';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export const App = () => {
  Orientation.lockToPortrait();

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
