import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, VarlikDetayScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="varlikDetay-screen" component={VarlikDetayScreen} />
    </Stack.Navigator>
  );
};
