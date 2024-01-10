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
import {useTranslation} from 'react-i18next';

export const SettingsScreen = () => {
  const {t} = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();
  return (
    <LinearGradientContainer>
      <Header text={t('headers.settings')} />
      <View style={style.innerContainer}>
        <SettingsCard text={t('headers.settingsHeaders.notifications')} />
        <SettingsCard
          text={t('headers.settingsHeaders.language')}
          onPress={() =>
            navigation.navigate('settingLanguage-screen', {
              header: t('headers.settingsHeaders.language'),
            })
          }
        />
        <SettingsCard
          text={t('headers.settingsHeaders.support')}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {
              header: t('headers.settingsHeaders.support'),
            })
          }
        />
        <SettingsCard
          text={t('headers.settingsHeaders.policy')}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {
              header: t('headers.settingsHeaders.policy'),
            })
          }
        />
        <SettingsCard
          text={t('headers.settingsHeaders.legalWarning')}
          onPress={() =>
            navigation.navigate('settingDetay-screen', {
              header: t('headers.settingsHeaders.legalWarning'),
            })
          }
        />
        <SettingsCard
          text={t('headers.settingsHeaders.aboutApp')}
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
