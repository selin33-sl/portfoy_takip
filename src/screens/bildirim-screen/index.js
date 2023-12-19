import {View, Text, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BildirimCard, Header} from '../../components';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets';

export const BildirimScreen = () => {
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
      <BildirimCard
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
    <LinearGradient colors={['#44007A', '#10001D']} style={style.container}>
      <Header text={'BİLDİRİMLERİM'} />
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
    </LinearGradient>
  );
};
