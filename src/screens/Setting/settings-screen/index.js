import {View, Text} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Header,
  LinearGradientContainer,
  SettingsCard,
  UygulamaHakkindaModal,
} from '../../../components';
import style from './style';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();
  return (
    <LinearGradientContainer>
      <Header text={'AYARLAR'} />
      <View style={style.innerContainer}>
        <SettingsCard text={'Bildirimler'} />
        <SettingsCard
          text={'Dil'}
          onPress={() =>
            navigation.navigate('settingLanguage-screen', {header: 'Dil'})
          }
        />
        <SettingsCard
          text={'Destek'}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {header: 'Destek'})
          }
        />
        <SettingsCard
          text={'Kullanıcı Sözleşmesi ve Gizlilik Politikası'}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {
              header: 'Kullanıcı Sözleşmesi ve Gizlilik Politikası',
            })
          }
        />
        <SettingsCard
          text={'Yasal Uyarı'}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {header: 'Yasal Uyarı'})
          }
        />
        <SettingsCard
          text={'Uygulama Hakkında'}
          onPress={() => setIsModalVisible(true)}
        />
      </View>

      <UygulamaHakkindaModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </LinearGradientContainer>
  );
};
