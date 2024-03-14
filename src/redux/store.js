import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {
  addAssetSlice,
  addPortfolioSlice,
  assetDataSlice,
  deleteAssetSlice,
  deletePortfolioSlice,
  getAllCurrencySlice,
  getAllGoldSlice,
  getAllPortfolioSlice,
  getAllStockSlice,
  getAssetDetailsSlice,
  getAssetPercentagesSlice,
  getBudgetDetailsSlice,
  getCurrencyDetailSlice,
  getEmtiaSlice,
  getFundDetailSlice,
  getGoldDetailSlice,
  getGumusSlice,
  getKriptoSlice,
  getPortfolioDetailsSlice,
  getPortfolioTypeDetailsSlice,
  getSearchCryptoSlice,
  getSearchCurrencySlice,
  getSearchFundSlice,
  getSearchGoldSlice,
  getSearchStockSlice,
  getStockDetailSlice,
  informSelectedHeaderSlice,
  loginSlice,
  notificationPermissionSlice,
  registerSlice,
  searchAssetDataSlice,
  updateAssetSlice,
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
  getAssetPercentages: getAssetPercentagesSlice,
  removeAsset: deleteAssetSlice,
  getAssetDetails: getAssetDetailsSlice,
  updateAsset: updateAssetSlice,
  searchStock: getSearchStockSlice,
  searchCurrency: getSearchCurrencySlice,
  searchGold: getSearchGoldSlice,
  assetData: assetDataSlice,
  searchAssetData: searchAssetDataSlice,
  getPortfolioTypeDetails: getPortfolioTypeDetailsSlice,
  informSelectedHeader: informSelectedHeaderSlice,
  notificationPermission: notificationPermissionSlice,
  getFundDetail: getFundDetailSlice,
  searchFund: getSearchFundSlice,
  getBudget: getBudgetDetailsSlice,
  searchCrypto: getSearchCryptoSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
