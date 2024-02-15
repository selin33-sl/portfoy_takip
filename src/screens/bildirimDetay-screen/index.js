import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Header, LinearGradientContainer} from '../../components';
import {useTranslation} from 'react-i18next';
import style from './style';

export const BildirimDetayScreen = () => {
  const {t} = useTranslation();
  const route = useRoute();
  const body = route.params.body;
  const id = route.params.id;
  const image = route.params.image;
  const navigation = useNavigation();
  return (
    <LinearGradientContainer>
      <Header backIcon text={t('headers.notificationDetail')} />
      <ScrollView>
        <View style={style.innerContainer}>
          <Text style={style.text}>{body}</Text>
          {image && image.length ? (
            <View style={style.imageContainer}>
              <Image
                source={{uri: image}}
                size={50}
                style={style.image}
                resizeMode="contain"
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </LinearGradientContainer>
  );
};
