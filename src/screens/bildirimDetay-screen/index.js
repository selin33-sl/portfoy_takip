import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Header} from '../../components';
import style from './style';

export const BildirimDetayScreen = () => {
  const route = useRoute();
  const body = route.params.body;
  const id = route.params.id;
  const image = route.params.image;
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header backIcon text={'Bildirim Detay'} />
      <View style={style.innerContainer}>
        <Text style={style.text}>{body}</Text>
        {image && image.length ? (
          <View style={style.imageContainer}>
            <Image source={{uri: image}} size={50} style={style.image} />
          </View>
        ) : null}
      </View>
    </LinearGradient>
  );
};
