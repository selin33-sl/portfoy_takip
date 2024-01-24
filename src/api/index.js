import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import Config from 'react-native-config';

// Accessing individual variables
const apiBaseUrl = Config.BASE_URL_API;
const apiBaseAuthUrl = Config.BASE_URL_AUTH;
console.log('apiBaseUrl:', apiBaseUrl);

axios.defaults.baseURL = apiBaseUrl;
const ALTERNATIVE_BASE_URL = apiBaseAuthUrl;

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
    const response = await axios.post(ALTERNATIVE_BASE_URL, data);
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

const getStockDetailProcess = createAsyncThunk(
  'getStockDetail/getStockDetailProcess',
  async name => {
    const res = await axios.get(`getStockDetail/${name}`);
    return res;
  },
);

const getAllCurrencyProcess = createAsyncThunk(
  'getAllCurrency/getAllCurrencyProcess',
  async () => {
    const res = await axios.get('getAllCurrency');
    return res;
  },
);

const getCurrencyDetailProcess = createAsyncThunk(
  'getCurrencyDetail/getCurrencyDetailProcess',
  async name => {
    const res = await axios.get(`getCurrencyDetail/${name}`);
    return res;
  },
);

const getAllGoldProcess = createAsyncThunk(
  'getAllGold/getAllGoldProcess',
  async () => {
    const res = await axios.get('getAllGold');
    return res;
  },
);

const getGoldDetailProcess = createAsyncThunk(
  'getGoldDetail/getGoldDetailProcess',
  async name => {
    const res = await axios.get(`getGoldDetail/${name}`);
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

const getAllPortfolioProcess = createAsyncThunk(
  'getAllPortfolio/getAllPortfolioProcess',
  async () => {
    const res = await axios.get('/getAllPortfolio');
    return res;
  },
);

const addPortfolioProcess = createAsyncThunk(
  'createPortfolio/addPortfolioProcess',
  async (data, {rejectWithValue}) => {
    const {name} = data;
    try {
      const res = await axios.post('createPortfolio', data);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const deletePortfolioProcess = createAsyncThunk(
  'deletePortfolio/deletePortfolioProcess',
  async (id, {rejectWithValue}) => {
    try {
      const res = await axios.delete(`deletePortfolio/${id}`);
      return res.data;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const updatePortfolioProcess = createAsyncThunk(
  'updatePortfolio/updatePortfolioProcess',
  async ({id, data}, {rejectWithValue}) => {
    try {
      const {name} = data;
      const res = await axios.put(`updatePortfolio/${id}`, data);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getPortfolioDetailsProcess = createAsyncThunk(
  'getPortfolioDetails/getPortfolioDetailsProcess',
  async ({id}, {rejectWithValue}) => {
    console.log(id, 'IDIDIDIIDIDID');
    try {
      const res = await axios.get(`getPortfolioDetails/${id}`);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

export {
  authLogin,
  registerProcess,
  getAllStockProcess,
  getAllCurrencyProcess,
  getAllGoldProcess,
  getStockDetailProcess,
  getCurrencyDetailProcess,
  getGoldDetailProcess,
  getKriptoProcess,
  getEmtiaProcess,
  getGumusProcess,
  getAllPortfolioProcess,
  addPortfolioProcess,
  deletePortfolioProcess,
  updatePortfolioProcess,
  getPortfolioDetailsProcess,
};

// const createSchoolStaff = createAsyncThunk(
//   "createSchoolStaff/createSchoolStaff",
//   async ({ id, data }, { rejectWithValue }) => {
//     try {
//       const { name, email, password, role, phoneNumber, subjectId } = data;
//       const response = await axios.post(
//         `/school/createSchoolStaff/${id}/staff`,
//         data
//       );
//       return response;
//     } catch (error) {
//       throw rejectWithValue(error.response.data);
//     }
//   }
// );

// const handleSave = async (formikValues) => {
//   await dispatch(
//     createSchoolStaff({
//       id: params.tab,
//       data: {
//         name: formikValues.name,
//         email: formikValues.email,
//         password: formikValues.password,
//         subjectId: formikValues.subjectId,
//         phoneNumber: formikValues.phoneNumber,
//         role: "TEACHER",
//       },
//     })
//   );
//   await dispatch(getTeacherBySchoolId(params.tab));
// };
