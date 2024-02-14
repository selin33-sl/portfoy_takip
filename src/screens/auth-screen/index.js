import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import {
  LinearGradientContainer,
  PatternDesign,
  TextinputCard,
} from '../../components';
import {useTranslation} from 'react-i18next';
import {
  authLogin,
  getAllPortfolioProcess,
  getPortfolioDetailsProcess,
  registerProcess,
} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {resetRegister} from '../../redux/slice/auth/register-slice';
import {resetAuth, savePortfolioId} from '../../redux/slice/auth/login-slice';
import {useToast} from '../../hooks/useToast';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const AuthScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [register, setRegister] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  const schema = yup.object().shape({
    username: register ? yup.string().required('Username is required') : null,
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must contain at least 6 characters'),
  });

  const {
    status: registerStatus,
    message: RegisterMessage,
    portfolioId: portfolioId,
  } = useSelector(state => state.register);

  const {status: loginStatus, message: loginMessage} = useSelector(
    state => state.auth,
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  useEffect(() => {
    reset({
      email: '',
      password: '',
      username: '',
    });
  }, [register]);

  useEffect(() => {
    if (registerStatus && registerStatus === 'success') {
      setRegister(false);
    }
  }, [registerStatus]);

  useEffect(() => {
    if (portfolioId) {
      const fetchData = async () => {
        try {
          dispatch(getPortfolioDetailsProcess({id: portfolioId}));
        } catch (error) {
          console.error('Error fetching selectedPortfolioId:', error);
        }
      };

      fetchData();
    }
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

    dispatch(resetRegister());
    dispatch(resetAuth());
  };

  const handleLoginorRegister = async formData => {
    console.log('handleLoginorRegister', formData);
    if (register === true) {
      await dispatch(
        registerProcess({
          username: formData?.username,
          email: formData?.email,
          password: formData?.password,
        }),
      );
    } else {
      if (!isConnected) {
        Alert.alert(
          'İnternet Bağlantısı Yok',
          'Lütfen internet bağlantınızı kontrol ediniz..',
        );
        return;
      }
      await dispatch(
        authLogin({email: formData?.email, password: formData?.password}),
      );
    }
  };

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
                  control={control}
                  rules={{
                    required: true,
                  }}
                  errors={errors.username}
                  name={'username'}
                  placeholder={t('registerScreen.userName')}
                  iconName={'account'}
                />
              ) : null}

              <TextinputCard
                control={control}
                rules={{
                  required: true,
                }}
                errors={errors.email}
                placeholder={'Email'}
                name={'email'}
                iconName={'email-outline'}
                keyboardType={'email-address'}
              />

              <TextinputCard
                control={control}
                rules={{
                  required: true,
                }}
                errors={errors.password}
                name={'password'}
                secureText={true}
                placeholder={t('common.password')}
                iconName={'lock-outline'}
              />
            </View>

            <TouchableOpacity
              style={style.buttonContainer}
              onPress={handleSubmit(handleLoginorRegister)}>
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
