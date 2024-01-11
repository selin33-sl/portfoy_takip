import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.collectapi.com/economy/';
axios.defaults.baseURL = 'https://api.collectapi.com/economy/';

const baseURL1 = 'https://portfoy-takip.onrender.com/';

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'apikey 4igZwGbaQfUUQt09D0Ibgz:7fWQWREPHXz5fnE2Pk5a8H',
  },
  credentials: 'include',
});

const authLogin = createAsyncThunk('auth', async data => {
  try {
    const {email, password} = data;
    const response = await axios.post(baseURL1, data);
    const accessToken = response.data.accessToken;

    const currentTime = new Date().getTime();

    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('tokenCreationTime', currentTime.toString());
    return accessToken;
  } catch (error) {
    throw error.response.data;
  }
});

const getHisseSenediProcess = createAsyncThunk(
  'hisseSenedi/getHisseSenediProcess',
  async () => {
    const res = await axiosInstance.get('hisseSenedi');
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
  getHisseSenediProcess,
  getDovizProcess,
  getKriptoProcess,
  getEmtiaProcess,
  getGumusProcess,
  getAltinProcess,
};
