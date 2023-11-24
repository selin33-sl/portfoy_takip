import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, HomeScreen} from '../screens';
import {BottomTabs} from './bottom-tabs';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="auth-screen" component={AuthScreen} />
      <Stack.Screen name="bottom-tabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
