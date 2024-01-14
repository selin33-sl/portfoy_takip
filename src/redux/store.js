import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {
  getAllCurrencySlice,
  getAllStockSlice,
  getAltinSlice,
  getEmtiaSlice,
  getGumusSlice,
  getKriptoSlice,
  loginSlice,
  registerSlice,
} from './slice';

const reducer = combineReducers({
  getAllStock: getAllStockSlice,
  getAllCurrency: getAllCurrencySlice,
  cripto: getKriptoSlice,
  emtia: getEmtiaSlice,
  silverPrice: getGumusSlice,
  goldPrice: getAltinSlice,
  auth: loginSlice,
  register: registerSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
