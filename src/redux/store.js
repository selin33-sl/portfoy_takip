import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {
  getAllStockSlice,
  getAltinSlice,
  getDovizSlice,
  getEmtiaSlice,
  getGumusSlice,
  getKriptoSlice,
  loginSlice,
  registerSlice,
} from './slice';

const reducer = combineReducers({
  getAllStock: getAllStockSlice,
  allCurrency: getDovizSlice,
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
