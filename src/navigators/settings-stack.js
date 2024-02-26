import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NotificationPermissionScreen,
  SettingDetayScreen,
  SettingLanguageScreen,
  SettingsScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="settings-screen" component={SettingsScreen} />
      <Stack.Screen name="settingDetay-screen" component={SettingDetayScreen} />
      <Stack.Screen
        name="notification-screen"
        component={NotificationPermissionScreen}
      />
      <Stack.Screen
        name="settingLanguage-screen"
        component={SettingLanguageScreen}
      />
    </Stack.Navigator>
  );
};
