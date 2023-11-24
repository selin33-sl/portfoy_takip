import {DeviceEventEmitter} from 'react-native';
import React from 'react';
import Orientation from 'react-native-orientation-locker';
import AppStack from './navigators/app-stack';

export const App = () => {
  Orientation.lockToPortrait();
  return <AppStack />;
};
