import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import i18next from '../services/i18next';
import Config from 'react-native-config';

// Accessing individual variables
const apiBaseUrl = Config.BASE_URL_API;
const apiBaseAuthUrl = Config.BASE_URL_AUTH;

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

      if (accessToken) {
        // Başlıklara erişim belirtecini ekleyin
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      if (i18next.language) {
        config.headers['Accept-Language'] = `${i18next.language}`;
      }
      return config;
    } catch (error) {
      // Hata durumunda yapılacak işlemleri burada ele alabilirsiniz
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
    const accessToken = response.data.data.accessToken;

    const currentTime = new Date().getTime();

    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('tokenCreationTime', currentTime.toString());

    return response;
  } catch (error) {
    throw error.response.data;
  }
});

const registerProcess = createAsyncThunk(
  'register/registerProcess',

  async (data, {rejectWithValue}) => {
    try {
      const {username, password, email} = data;
      const response = await axios.post('/', data);
      // if (response.data.status === 'success') {
      //   await firebase.messaging().registerDeviceForRemoteMessages().then(() => {
      //     console.log('Registered');
      //   })
      //     .catch(e => console.log(e, 'abuk subuk şeyler'));
      // }
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.response.data);
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
  async ({name, day}) => {
    const res = await axios.get(`getStockDetail/${name}/${day}`);
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
  async ({name, day}) => {
    const res = await axios.get(`getCurrencyDetail/${name}/${day}`);
    return res;
  },
);

const getCryptoDetailProcess = createAsyncThunk(
  'getCryptoDetail/getCryptoDetailProcess',
  async ({name, day}) => {
    const res = await axios.get(`getCryptoDetail/${name}/${day}`);
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
  async ({data}, {rejectWithValue}) => {
    try {
      const {name, day} = data;
      const res = await axios.post(`/getGoldDetail`, data);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
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
    try {
      const res = await axios.get(`getPortfolioDetails/${id}`);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const addAssetProcess = createAsyncThunk(
  'addAsset/addAssetProcess',
  async ({portfolioId, data}, {rejectWithValue}) => {
    try {
      const {type, name, quantity, purchasePrice, purchaseDate} = data;
      const res = await axios.post(`addAsset/${portfolioId}`, data);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getAssetPercentagesProcess = createAsyncThunk(
  'getAssetPercentages/getAssetPercentagesProcess',
  async ({id, type}, {rejectWithValue}) => {
    try {
      const res = await axios.get(`getAssetPercentages/${id}/${type}`);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const deleteAssetProcess = createAsyncThunk(
  'removeAsset/deleteAssetProcess',
  async ({portfolioId, assetId}, {rejectWportfolioIthValue}) => {
    try {
      const res = await axios.delete(`removeAsset/${portfolioId}/${assetId}`);
      return res.data;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getAssetDetailsProcess = createAsyncThunk(
  'getAssetDetails/getAssetDetailsProcess',
  async ({data}, {rejectWithValue}) => {
    try {
      const {portfolioId, assetId, type, name, numberOfDays} = data;
      const res = await axios.post(`getAssetDetails`, data);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const updateAssetProcess = createAsyncThunk(
  'updateAsset/updateAssetProcess',
  async ({portfolioId, assetId, data}, {rejectWithValue}) => {
    try {
      const {quantity, purchasePrice, purchaseDate} = data;
      const res = await axios.put(
        `updateAsset/${portfolioId}/${assetId}`,
        data,
      );
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getSearchStockProcess = createAsyncThunk(
  'searchStock/getSearchStockProcess',
  async ({data, page}, {rejectWithValue}) => {
    try {
      const res = await axios.post(`searchStock/${data}?page=${page}&limit=20`);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getSearchCurrencyProcess = createAsyncThunk(
  'searchCurrency/getSearchCurrencyProcess',
  async ({data, page}, {rejectWithValue}) => {
    try {
      // const res = await axios.post(`searchCurrency/${data}`);
      const res = await axios.post(
        `searchCurrency/${data}?page=${page}&limit=20`,
      );

      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getSearchCryptoProcess = createAsyncThunk(
  'searchCrypto/getSearchCryptoProcess',
  async ({data, page}, {rejectWithValue}) => {
    try {
      const res = await axios.post(
        `searchCrypto/${data}?page=${page}&limit=20`,
      );

      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getSearchGoldProcess = createAsyncThunk(
  'searchGold/getSearchGoldProcess',
  async ({data, page}, {rejectWithValue}) => {
    try {
      const {searchParam} = data;
      const res = await axios.post(`searchGold?page=${page}&limit=20`, data);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getPortfolioTypeDetailsProcess = createAsyncThunk(
  'getPortfolioTypeDetails/getPortfolioTypeDetailsProcess',
  async ({id, type}, {rejectWithValue}) => {
    try {
      const res = await axios.get(`getPortfolioTypeDetails/${id}/${type}`);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getFundDetailProcess = createAsyncThunk(
  'getFundDetail/getFundDetailProcess',
  async ({name, day}) => {
    const res = await axios.get(`getFundDetail/${name}/${day}`);
    return res;
  },
);

const getSearchFundProcess = createAsyncThunk(
  'searchFund/getSearchFundProcess',
  async ({data, page}, {rejectWithValue}) => {
    try {
      const res = await axios.post(`searchFund/${data}?page=${page}&limit=20`);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const getBudgetDetailsProcess = createAsyncThunk(
  'getBudget/getBudgetDetailsProcess',
  async ({id}, {rejectWithValue}) => {
    try {
      const res = await axios.get(`getBudget/${id}`);
      return res;
    } catch (error) {
      throw rejectWithValue(error.response.data);
    }
  },
);

const sellAssetProcess = createAsyncThunk(
  'sellAsset/sellAssetProcess',
  async ({portfolioId, assetId, data}, {rejectWithValue}) => {
    try {
      const {quantity, sellingPrice} = data;
      const res = await axios.post(`sellAsset/${portfolioId}/${assetId}`, data);
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
  addAssetProcess,
  getAssetPercentagesProcess,
  deleteAssetProcess,
  getAssetDetailsProcess,
  updateAssetProcess,
  getSearchStockProcess,
  getSearchCurrencyProcess,
  getSearchCryptoProcess,
  getSearchGoldProcess,
  getPortfolioTypeDetailsProcess,
  getFundDetailProcess,
  getSearchFundProcess,
  getBudgetDetailsProcess,
  getCryptoDetailProcess,
  sellAssetProcess,
};
