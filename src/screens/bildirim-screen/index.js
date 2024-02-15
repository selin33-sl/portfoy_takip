import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BildirimAndLanguageCard,
  Header,
  LinearGradientContainer,
} from '../../components';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BildirimScreen = () => {
  const {t} = useTranslation();
  // const data = [
  //   {
  //     title: 'Bildirim1',
  //     id: 1,
  //     body: 'Bildirim1 bodyhfdgkjdhfgkljhdfgkljhdkjfghkjfhdglkjhfkjgfkjhkgjfhlkjglklfdh',
  //     image:
  //       'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png',
  //   },
  //   {title: 'Bildirim2', id: 2, body: 'Bildirim2 body'},
  //   {title: 'Bildirim3', id: 3, body: 'Bildirim3 body'},
  //   {title: 'Bildirim4', id: 4, body: 'Bildirim4 body'},
  // ];
  const [notifications, setNotifications] = useState([]);

  const navigation = useNavigation();
  console.log('notifications', notifications);

  useEffect(() => {
    // AsyncStorage'den bildirimleri al ve setNotifications ile state'i güncelle
    const getNotifications = async () => {
      try {
        const notificationsData = await AsyncStorage.getItem('Notifications');

        if (notificationsData) {
          const notificationsArray = JSON.parse(notificationsData);
          setNotifications(notificationsArray);
        }
      } catch (error) {
        console.error('Bildirimleri alma hatası:', error);
      }
    };

    // Her seferinde bileşen yeniden açıldığında bildirimleri güncelle
    const unsubscribe = navigation.addListener('focus', () => {
      getNotifications();
    });

    return unsubscribe; // Abonelikten çıkış yap
  }, [navigation]);

  const renderItem = ({item}) => {
    return (
      <BildirimAndLanguageCard
        title={item.title}
        onPress={() => {
          navigation.navigate('bildirimDetay-screen', {
            body: item.body,
            id: item.id,
            image: item?.image,
          });
        }}
      />
    );
  };

  return (
    <LinearGradientContainer>
      <Header text={t('headers.notifications')} />
      <View style={style.innerContainer}>
        {notifications && notifications.length ? null : (
          <Text style={style.text}>
            Görüntülenecek bir bildirim bulunamadı.
          </Text>
        )}
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={notifications}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </LinearGradientContainer>
  );
};
