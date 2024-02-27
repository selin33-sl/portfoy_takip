import React, {useState, useEffect} from 'react';
import {View, Text, Switch} from 'react-native';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestUserPermission} from '../../../utils/request-user-permission';

export const NotificationPermissionScreen = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  console.log('notificationEnabled', notificationEnabled);
  useEffect(() => {
    // Uygulama yüklendiğinde kullanıcının bildirim iznini kontrol et
    checkNotificationPermission();
  }, []);

  const checkNotificationPermission = async () => {
    // AsyncStorage'de bildirim izni durumunu kontrol et
    // Varsa, varsayılan değeri kullan
    const isEnabled = await AsyncStorage.getItem('@notificationEnabled');
    setNotificationEnabled(isEnabled === 'true');
  };

  const toggleNotificationPermission = async value => {
    // Kullanıcının bildirim iznini değiştir
    setNotificationEnabled(value);

    // AsyncStorage'de güncel bildirim izni durumunu kaydet
    await AsyncStorage.setItem('@notificationEnabled', value.toString());

    // Bildirim iznini güncelle (bildirim izinleri isteme işlevini çağır)
    if (value) {
      requestUserPermission();
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Bildirim İzni</Text>
      <View style={style.switchContainer}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={notificationEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotificationPermission}
          value={notificationEnabled}
        />
      </View>
    </View>
  );
};
