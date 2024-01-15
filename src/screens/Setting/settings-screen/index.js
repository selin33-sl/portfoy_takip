// SettingsScreen.js
import React, {useState} from 'react';
import {View} from 'react-native';
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

const settingsItems = [
  {text: 'headers.settingsHeaders.notifications', onPress: null},
  {text: 'headers.settingsHeaders.language', onPress: 'settingLanguage-screen'},
  {text: 'headers.settingsHeaders.support', onPress: 'settingDetay-screen'},
  {text: 'headers.settingsHeaders.policy', onPress: 'settingDetay-screen'},
  {
    text: 'headers.settingsHeaders.legalWarning',
    onPress: 'settingDetay-screen',
  },
  {text: 'headers.settingsHeaders.aboutApp', onPress: null},
];

export const SettingsScreen = () => {
  const {t} = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handlePress = (screen, header) => {
    if (screen) {
      navigation.navigate(screen, {header});
    } else {
      setIsModalVisible(true);
    }
  };

  return (
    <LinearGradientContainer>
      <Header text={t('headers.settings')} />
      <View style={style.innerContainer}>
        {settingsItems.map((item, index) => (
          <SettingsCard
            key={index}
            text={t(item.text)}
            onPress={() => handlePress(item.onPress, t(item.text))}
          />
        ))}
      </View>

      <UygulamaHakkindaModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </LinearGradientContainer>
  );
};
