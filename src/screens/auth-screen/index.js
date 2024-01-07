import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import style from './style';
import {
  LinearGradientContainer,
  PatternDesign,
  TextinputCard,
} from '../../components';
import {images} from '../../assets';
import {useNavigation} from '@react-navigation/native';

export const AuthScreen = () => {
  const navigation = useNavigation();
  const [register, setRegister] = useState(false);

  const handleRegisterScreen = () => {
    setRegister(!register);
  };

  const handlerLogin = () => {
    navigation.navigate('bottom-tabs');
  };

  const handlerRegister = () => {
    setRegister(false);
  };

  return (
    <LinearGradientContainer>
      <View style={style.innerContainer}>
        <View style={style.firstContainer}>
          <PatternDesign />
          {/* <Image source={images.donutchart} style={style.image} /> */}
        </View>

        <View style={style.secondContainer}>
          <View style={style.headerContainer}>
            <Text style={style.headerText}>
              {register ? 'Yeni Kullanıcı\nOluştur' : 'Hoşgeldiniz\nGiriş'}
            </Text>
          </View>

          <View style={style.subTitleContainer}>
            <Text style={style.subTitle}>
              {register
                ? 'Zaten hesabın var mı?  '
                : 'Henüz bir hesabınız yok mu?  '}
            </Text>
            <TouchableOpacity onPress={handleRegisterScreen}>
              <Text style={style.optionText}>
                {register ? 'Giriş' : 'Kayıt'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.inputContainer}>
            {register ? (
              <TextinputCard placeholder={'Kullanıcı Adı'} name={'account'} />
            ) : null}

            <TextinputCard
              placeholder={'Email'}
              name={'email-outline'}
              keyboardType={'email-address'}
            />
            <TextinputCard placeholder={'Şifre'} name={'lock-outline'} />

            {register ? (
              <TextinputCard
                placeholder={'Şifre Tekrar'}
                name={'lock-outline'}
              />
            ) : null}
          </View>
          <TouchableOpacity
            style={style.buttonContainer}
            onPress={register ? handlerRegister : handlerLogin}>
            <Text style={style.buttonText}>{register ? 'KAYIT' : 'GİRİŞ'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradientContainer>
  );
};
