import {View, Text} from 'react-native';
import React from 'react';
import {HomeScreen} from './screens/home-screen';
import {BottomTabs} from './navigators/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
