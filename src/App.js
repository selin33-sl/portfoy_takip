import React from 'react';
import Orientation from 'react-native-orientation-locker';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {AppStack} from './navigators';

export const App = () => {
  Orientation.lockToPortrait();

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
