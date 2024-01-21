import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {
  getAllCurrencySlice,
  getAllGoldSlice,
  getAllPortfolioSlice,
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
  auth: loginSlice,
  register: registerSlice,
  getAllStock: getAllStockSlice,
  getAllCurrency: getAllCurrencySlice,
  cripto: getKriptoSlice,
  emtia: getEmtiaSlice,
  silverPrice: getGumusSlice,
  getAllGold: getAllGoldSlice,
  getStockDetail: getStockDetailSlice,
  getCurrencyDetail: getCurrencyDetailSlice,
  getGoldDetail: getGoldDetailSlice,
  getAllPortfolio: getAllPortfolioSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
