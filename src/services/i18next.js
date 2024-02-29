import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import tr from '../locales/tr.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const languageResources = {
  en: {translation: en},
  tr: {translation: tr},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'tr',
  fallbackLng: 'tr',
  resources: languageResources,
});

const retrieveLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
    if (savedLanguage !== null) {
      i18next.changeLanguage(savedLanguage);
    }
  } catch (error) {
    console.error('Error retrieving language:', error);
  }
};

retrieveLanguage();

export default i18next;
