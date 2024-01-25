import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import {
  LinearGradientContainer,
  PatternDesign,
  TextinputCard,
} from '../../components';
import {useTranslation} from 'react-i18next';
import {authLogin, registerProcess} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {resetRegister} from '../../redux/slice/auth/register-slice';
import {resetAuth} from '../../redux/slice/auth/login-slice';
import {useToast} from '../../hooks/useToast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [register, setRegister] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('123456');

  const {
    status: registerStatus,
    message: RegisterMessage,
    portfolioId: portfolioId,
  } = useSelector(state => state.register);

  console.log('portfolioId:', portfolioId);

  useEffect(() => {
    if (portfolioId) {
      const fetchData = async () => {
        try {
          await AsyncStorage.setItem('selectedPortfolioId', portfolioId);

          console.log('portfolioId:', portfolioId);

          const veli = await AsyncStorage.getItem('selectedPortfolioId');
          console.log(veli, 'ASYYYYYNC');
        } catch (error) {
          console.error('Error fetching selectedPortfolioId:', error);
        }
      };

      fetchData();
    }

    // if (portfolioId) {
    //   AsyncStorage.setItem('selectedPortfolioId', portfolioId);
    // }
    // const veli = AsyncStorage.getItem('selectedPortfolioId');
    // console.log(veli, 'ASYYYYYNC');
  }, [portfolioId]);

  useToast(
    registerStatus,
    resetRegister(),
    RegisterMessage,
    RegisterMessage,
    dispatch,
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe(); // Abonelikten çıkış yapılması gerekiyor
    };
  }, []);

  const handleRegisterScreen = () => {
    setRegister(!register);
    setEmail('');
    setUsername('');
    setPassword('');
    dispatch(resetRegister());
    dispatch(resetAuth());
  };

  // const handleLogin = () => {
  //   navigation.navigate('bottom-tabs');
  // };

  const handleRegister = async () => {
    if (register && (username === '' || password === '' || email === '')) {
      Alert.alert('Uyarı', 'Lütfen bütün alanları doldurunuz.');
      return;
    }
    // if (!isEmailValid) {
    //   Alert.alert('Uyarı', 'Lütfen geçerli bir e-posta adresi giriniz.');
    //   return;
    // }

    await dispatch(registerProcess({username, password, email}));
  };

  const handleLogin = () => {
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
              onPress={register ? handleRegister : handleLogin}>
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
