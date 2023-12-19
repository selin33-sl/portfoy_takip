import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BildirimDetayScreen,
  BildirimScreen,
  SettingBildirimDetayScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const BildirimStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="bildirim-screen" component={BildirimScreen} />
      <Stack.Screen
        name="bildirimDetay-screen"
        component={BildirimDetayScreen}
      />
    </Stack.Navigator>
  );
};
