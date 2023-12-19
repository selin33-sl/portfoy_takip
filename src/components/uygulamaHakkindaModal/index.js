import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import VersionCheck from 'react-native-version-check';

export const UygulamaHakkindaModal = ({isModalVisible, setIsModalVisible}) => {
  //   const [surum, setSurum] = useState('');
  //   const handleUpdatePress = () => {
  //     // Uygulamanızın Play Store URL'sini buraya ekleyin
  //     const playStoreUrl = 'https://collectapi.com/tr/';

  //     // Play Store'u açmak için Linking kullanın
  //     Linking.openURL(playStoreUrl)
  //       .then(() => {
  //         console.log('Play Store açıldı');
  //       })
  //       .catch(error => {
  //         console.error('Play Store açılamadı', error);
  //       });
  //   };

  //   const showCancelAlert = () => {
  //     Alert.alert(
  //       'Yeni Güncelleme Mevcut',
  //       'Lütfen uygulamanızı güncelleyin.',
  //       [
  //         {
  //           text: 'İptal',
  //           onPress: () => console.log('Güncelleme iptal edildi'),
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'Şimdi Yükle',
  //           onPress: handleUpdatePress,
  //         },
  //       ],
  //       {cancelable: true},
  //     );
  //   };
  //   console.log(surum.toString(), 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
  //   const checkForUpdates = async () => {
  //     try {
  //       const update = await VersionCheck.needUpdate();
  //       if (update.isNeeded) {
  //         // Güncelleme mevcutsa, kullanıcıya bildirin
  //         update.currentVersion; //ile mevcut uygulama sürümünü alabilirsiniz
  //         update.latestVersion; // ile en son sürümü alabilirsiniz
  //         update.storeUrl; //ile güncellemeyi indirebileceği mağaza bağlantısını alabilirsiniz
  //         showCancelAlert();
  //         setSurum(update.currentVersion);
  //       } else {
  //         console.log(update.currentVersion, 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii ');
  //         setSurum(update.currentVersion);
  //       }
  //     } catch (error) {
  //       // Hata kontrolü
  //       console.error('Güncelleme kontrolü sırasında hata oluştu:', error);
  //     }
  //   };
  //   checkForUpdates();

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsModalVisible(false)}>
      <View style={style.container}>
        <LinearGradient
          colors={['#10001D', '#44007A']}
          style={style.innerContainer}>
          <View style={style.iconsContainer}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Icon
                name={'close'}
                size={25}
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={style.textContainer}>
            <Text style={style.text1}>Uygulama Adı </Text>
            <Text style={style.text2}>Sürüm: 0.0.1 </Text>
            <View>
              <Text style={style.text2}>Piyasa Verisi Sağlayıcıları:</Text>
              <Text style={style.text3}>CollectAPI</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
