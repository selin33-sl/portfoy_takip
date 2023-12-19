import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabs} from './bottom-tabs';
import {DegerlendirmelerScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const DegerlendirmelerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="degerlendirmeler-screen"
        component={DegerlendirmelerScreen}
      />
    </Stack.Navigator>
  );
};
