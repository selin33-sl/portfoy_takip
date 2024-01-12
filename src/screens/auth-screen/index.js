import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import {
  LinearGradientContainer,
  PatternDesign,
  TextinputCard,
  ToastCompError,
} from '../../components';
import {images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {authLogin} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

export const AuthScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [register, setRegister] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [showNoInternetToast, setShowNoInternetToast] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setShowNoInternetToast(!state.isConnected);
    });

    return () => {
      unsubscribe(); // Abonelikten çıkış yapılması gerekiyor
    };
  }, []);

  const handleRegisterScreen = () => {
    setRegister(!register);
  };

  // const handlerLogin = () => {
  //   navigation.navigate('bottom-tabs');
  // };

  const handlerLogin = () => {
    if (!isConnected) {
      Alert.alert(
        'İnternet Bağlantısı Yok',
        'Lütfen internet bağlantınızı kontrol ediniz..',
      );
      return;
    }

    if (email === '' || password === '') {
      Alert.alert('Uyarı', 'Lütfen kullanıcı adınızı ve şifrenizi giriniz.');
      return;
    }
    // requestNotificationPermission(); // Bildirim izni iste
    dispatch(authLogin({email, password}));
  };

  const handlerRegister = () => {
    setRegister(false);
  };

  // const handleEmailChange = text => {
  //   setEmail(text);

  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //   if (emailRegex.test(text)) {
  //     setEmailValid(true);
  //   } else {
  //     setEmailValid(false);
  //   }
  // };

  return (
    <ScrollView>
      <LinearGradientContainer>
        <ToastCompError
          show={showNoInternetToast}
          text1="İnternet Bağlantısı Yok"
          text2="Lütfen internet bağlantınızı kontrol ediniz.."
        />
        <View style={style.innerContainer}>
          <View style={style.firstContainer}>
            <PatternDesign />
            {/* <Image source={images.donutchart} style={style.image} /> */}
          </View>

          <View style={style.secondContainer}>
            <View style={style.headerContainer}>
              <Text style={style.headerText}>
                {register
                  ? t('registerScreen.description')
                  : `${t('loginScreen.welcome')}\n${t('common.login')}`}
              </Text>
            </View>

            <View style={style.subTitleContainer}>
              <Text style={style.subTitle}>
                {register
                  ? t('registerScreen.question')
                  : t('loginScreen.question')}
              </Text>
              <TouchableOpacity onPress={handleRegisterScreen}>
                <Text style={style.optionText}>
                  {register ? t('common.login') : t('common.register')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={style.inputContainer}>
              {register ? (
                <TextinputCard
                  value={username}
                  setValue={setUsername}
                  placeholder={t('registerScreen.userName')}
                  name={'account'}
                />
              ) : null}

              <TextinputCard
                value={email}
                setValue={setEmail}
                placeholder={'Email'}
                name={'email-outline'}
                keyboardType={'email-address'}
              />
              <TextinputCard
                value={password}
                setValue={setPassword}
                secureText={true}
                placeholder={t('common.password')}
                name={'lock-outline'}
              />

              {/* {register ? (
              <TextinputCard
                placeholder={t('registerScreen.repeatPasword')}
                name={'lock-outline'}
              />
            ) : null} */}
            </View>
            <TouchableOpacity
              style={style.buttonContainer}
              onPress={register ? handlerRegister : handlerLogin}>
              <Text style={style.buttonText}>
                {register ? t('common.register') : t('common.login')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradientContainer>
    </ScrollView>
  );
};
