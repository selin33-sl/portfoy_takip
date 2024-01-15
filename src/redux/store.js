import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {
  getAllCurrencySlice,
  getAllGoldSlice,
  getAllStockSlice,
  getCurrencyDetailSlice,
  getEmtiaSlice,
  getGoldDetailSlice,
  getGumusSlice,
  getKriptoSlice,
  getStockDetailSlice,
  loginSlice,
  registerSlice,
} from './slice';

const reducer = combineReducers({
  getAllStock: getAllStockSlice,
  getAllCurrency: getAllCurrencySlice,
  cripto: getKriptoSlice,
  emtia: getEmtiaSlice,
  silverPrice: getGumusSlice,
  getAllGold: getAllGoldSlice,
  getStockDetail: getStockDetailSlice,
  getCurrencyDetail: getCurrencyDetailSlice,
  getGoldDetail: getGoldDetailSlice,
  auth: loginSlice,
  register: registerSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
