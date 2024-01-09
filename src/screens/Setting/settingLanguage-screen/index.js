import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {
  BildirimCard,
  Header,
  LinearGradientContainer,
} from '../../../components';
import style from './style';
import {useRoute} from '@react-navigation/native';
import i18next, {languageResources} from '../../../services/i18next';
import languagesList from '../../../services/languagesList.json';

export const SettingLanguageScreen = () => {
  const route = useRoute();
  const {header} = route.params;

  const changeLng = lng => {
    i18next.changeLanguage(lng);
  };

  const renderItem = ({item}) => {
    return (
      <BildirimCard
        title={languagesList[item].nativeName}
        onPress={() => changeLng(item)}
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
