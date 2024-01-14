import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://portfoy-takip.onrender.com/api';
axios.defaults.baseURL = baseURL;

const ALTERNATİVE_BASE_URL = 'https://portfoy-takip.onrender.com/auth';

// const axiosInstance = axios.create({
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'apikey 4igZwGbaQfUUQt09D0Ibgz:7fWQWREPHXz5fnE2Pk5a8H',
//   },
//   credentials: 'include',
// });

axios.interceptors.request.use(
  async config => {
    try {
      // Erişim belirtecini async storage'dan alın
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log(accessToken);

      if (accessToken) {
        // Başlıklara erişim belirtecini ekleyin
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    } catch (error) {
      // Hata durumunda yapılacak işlemleri burada ele alabilirsiniz
      console.error('Interceptor Error:', error);
      return Promise.reject(error);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

const authLogin = createAsyncThunk('auth/login', async data => {
  try {
    const {email, password} = data;
    const response = await axios.post(ALTERNATİVE_BASE_URL, data);
    const accessToken = response.data.accessToken;

    const currentTime = new Date().getTime();

    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('tokenCreationTime', currentTime.toString());

    return accessToken;
  } catch (error) {
    throw error.response.data;
  }
});

const registerProcess = createAsyncThunk(
  'register/registerProcess',
  async data => {
    try {
      const {username, password, email} = data;
      const response = await axios.post('/', data);
      console.log(response.data.status, 'lkhjgsdhjklsdlhjksdlhjksd');
      // if (response.data.status === 'success') {
      //   await firebase.messaging().registerDeviceForRemoteMessages().then(() => {
      //     console.log('Registered');
      //   })
      //     .catch(e => console.log(e, 'abuk subuk şeyler'));
      // }
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
);

const getAllStockProcess = createAsyncThunk(
  'getAllStock/getAllStockProcess',
  async () => {
    const res = await axios.get('/getAllStock');
    return res;
  },
);

const getDovizProcess = createAsyncThunk(
  'allCurrency/getDovizProcess',
  async () => {
    const res = await axiosInstance.get('allCurrency');
    return res;
  },
);

const getKriptoProcess = createAsyncThunk(
  'cripto/getKriptoProcess',
  async () => {
    const res = await axiosInstance.get('cripto');
    return res;
  },
);

const getEmtiaProcess = createAsyncThunk('emtia/getEmtiaProcess', async () => {
  const res = await axiosInstance.get('emtia');
  return res;
});
const getGumusProcess = createAsyncThunk(
  'silverPrice/getGumusProcess',
  async () => {
    const res = await axiosInstance.get('silverPrice');
    return res;
  },
);
const getAltinProcess = createAsyncThunk(
  'goldPrice/getAltinProcess',
  async () => {
    const res = await axiosInstance.get('goldPrice');
    return res;
  },
);

export {
  getAllStockProcess,
  getDovizProcess,
  getKriptoProcess,
  getEmtiaProcess,
  getGumusProcess,
  getAltinProcess,
  authLogin,
  registerProcess,
};
