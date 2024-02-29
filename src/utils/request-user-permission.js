import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFCMToken();
  }
}

const getFCMToken = async () => {
  let checkToken = await AsyncStorage.getItem('@TOKEN');
  if (!checkToken) {
    try {
      const token = await messaging().getToken();
      if (token) {
        await AsyncStorage.setItem('@TOKEN', token);
      }
    } catch (error) {
      alert(error);
    }
  }
};

// Önceki bildirimleri alma fonksiyonu
const getNotifications = async () => {
  try {
    const notifications = await AsyncStorage.getItem('Notifications');
    if (notifications === null) {
      return [];
    }
    return JSON.parse(notifications);
  } catch (error) {
    console.error('Bildirimleri alma hatası:', error);
    return [];
  }
};

function generateUniqueId() {
  // Burada basit bir UUID oluşturma işlemi yapabilirsiniz
  // Bu örnekte, rasgele sayılar ve harf kombinasyonlarıyla benzersiz bir kimlik oluşturuyoruz.
  // Bu işlem sadece örnek amaçlıdır. Gerçek uygulamalar için daha güçlü bir benzersiz kimlik oluşturma yöntemi kullanmanız tavsiye edilir.

  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = 12; // Benzersiz kimlik uzunluğu

  let uniqueId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    uniqueId += chars[randomIndex];
  }

  return uniqueId;
}

// // Örnek kullanım
// const newUniqueId = generateUniqueId();
// console.log(newUniqueId);

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );

    // Önceki bildirimleri al
    const notifications = await getNotifications();

    const uniqueId = generateUniqueId();

    // Benzersiz bir kimlik oluşturmak için bir fonksiyon kullanabilirsiniz
    const newNotification = {
      image: remoteMessage?.notification?.android?.imageUrl,
      id: uniqueId,
      title: remoteMessage?.notification?.title,
      body: remoteMessage?.notification?.body,
    };

    notifications.push(newNotification);

    // Güncellenmiş bildirim listesini AsyncStorage'e kaydet
    await AsyncStorage.setItem('Notifications', JSON.stringify(notifications));
  });

  messaging()
    .getInitialNotification()
    .then(async remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );

        // Önceki bildirimleri al
        const notifications = await getNotifications();
        const uniqueId = generateUniqueId();

        // Yeni bildirimi bildirim listesine ekle
        notifications.push({
          id: uniqueId,
          image: remoteMessage?.notification?.android?.imageUrl,
          title: remoteMessage?.notification?.title,
          body: remoteMessage?.notification?.body,
        });

        // Güncellenmiş bildirim listesini AsyncStorage'e kaydet
        await AsyncStorage.setItem(
          'Notifications',
          JSON.stringify(notifications),
        );
      }
    });
};
