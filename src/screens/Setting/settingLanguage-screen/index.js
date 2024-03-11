import {View, Alert, FlatList, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  BildirimAndLanguageCard,
  Header,
  LinearGradientContainer,
} from '../../../components';
import style from './style';
import {useRoute} from '@react-navigation/native';
import i18next, {languageResources} from '../../../services/i18next';
import languagesList from '../../../services/languagesList.json';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../../theme';

export const SettingLanguageScreen = () => {
  const route = useRoute();
  const {header} = route.params;
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  console.log('seçilmiş dil nereden geliyor', i18next.language);

  useEffect(() => {
    // Uygulama başladığında kaydedilmiş dil seçimini kontrol et
    retrieveLanguage();
  }, []);

  const retrieveLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (savedLanguage !== null) {
        setCurrentLanguage(savedLanguage);
      } else {
        // Kaydedilmiş dil yoksa, varsayılan dili kullan
        setCurrentLanguage(i18next.language);
      }
    } catch (error) {
      console.error('Error retrieving language:', error);
    }
  };

  const changeLng = async lng => {
    try {
      // Seçilen dili kaydet
      await AsyncStorage.setItem('selectedLanguage', lng);
      i18next.changeLanguage(lng);
      setCurrentLanguage(lng);
      restartApp();
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  const restartApp = () => {
    Alert.alert(
      'Uygulama Yeniden Başlatılacak',
      'Dil değişikliği için uygulamanın yeniden başlatılması gerekmektedir. Devam etmek istiyor musunuz?',
      [
        {
          text: 'Vazgeç',
          style: 'cancel',
        },
        {
          text: 'Tamam',
          onPress: () => {
            if (Platform.OS === 'ios') {
              // iOS için yeniden başlatma
              // Bu kısım uygulamanın nasıl yeniden başlatılacağına yönelik platforma özgü kodlar içermelidir
              // Örneğin:
              // NativeModules.DevSettings.reload();
            } else {
              // Android için yeniden başlatma
              // Bu kısım uygulamanın nasıl yeniden başlatılacağına yönelik platforma özgü kodlar içermelidir
              // Örneğin:
              RNRestart.Restart();
            }
          },
        },
      ],
    );
  };

  const renderItem = ({item}) => {
    return (
      <BildirimAndLanguageCard
        cartStyle={{
          ...style.cardStyle,
          backgroundColor: item == currentLanguage ? 'grey' : colors.greyLight,
        }}
        title={languagesList[item].nativeName}
        onPress={() => changeLng(item)}
        selected={currentLanguage === item}
      />
    );
  };

  return (
    <LinearGradientContainer>
      <Header text={header} backIcon={true} />
      <View style={style.innerContainer}>
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Object.keys(languageResources)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </LinearGradientContainer>
  );
};
