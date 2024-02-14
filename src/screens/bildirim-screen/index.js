import {View, Text, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BildirimAndLanguageCard,
  Header,
  LinearGradientContainer,
} from '../../components';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

export const BildirimScreen = () => {
  const {t} = useTranslation();
  const data = [
    {
      title: 'Bildirim1',
      id: 1,
      body: 'Bildirim1 bodyhfdgkjdhfgkljhdfgkljhdkjfghkjfhdglkjhfkjgfkjhkgjfhlkjglklfdh',
      image:
        'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png',
    },
    {title: 'Bildirim2', id: 2, body: 'Bildirim2 body'},
    {title: 'Bildirim3', id: 3, body: 'Bildirim3 body'},
    {title: 'Bildirim4', id: 4, body: 'Bildirim4 body'},
  ];

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <BildirimAndLanguageCard
        title={item.title}
        onPress={() => {
          navigation.navigate('bildirimDetay-screen', {
            body: item.body,
            id: item.id,
            image: item?.image,
          });
        }}
      />
    );
  };

  return (
    <LinearGradientContainer>
      <Header text={t('headers.notifications')} />
      <View style={style.innerContainer}>
        {data && data.length ? null : (
          <Text style={style.text}>
            Görüntülenecek bir bildirim bulunamadı.
          </Text>
        )}
        <View style={style.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </LinearGradientContainer>
  );
};
