import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import {
  getAltinSlice,
  getDovizSlice,
  getEmtiaSlice,
  getGumusSlice,
  getHisseSenediSlice,
  getKriptoSlice,
} from './slice';

const reducer = combineReducers({
  hisseSenedi: getHisseSenediSlice,
  allCurrency: getDovizSlice,
  cripto: getKriptoSlice,
  emtia: getEmtiaSlice,
  silverPrice: getGumusSlice,
  goldPrice: getAltinSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
