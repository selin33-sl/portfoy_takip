import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {
  addAssetSlice,
  addPortfolioSlice,
  deletePortfolioSlice,
  getAllCurrencySlice,
  getAllGoldSlice,
  getAllPortfolioSlice,
  getAllStockSlice,
  getCurrencyDetailSlice,
  getEmtiaSlice,
  getGoldDetailSlice,
  getGumusSlice,
  getKriptoSlice,
  getPortfolioDetailsSlice,
  getStockDetailSlice,
  loginSlice,
  registerSlice,
  updatePortfolioSlice,
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
  createPortfolio: addPortfolioSlice,
  deletePortfolio: deletePortfolioSlice,
  updatePortfolio: updatePortfolioSlice,
  getPortfolioDetails: getPortfolioDetailsSlice,
  addAsset: addAssetSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
