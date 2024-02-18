import {createSlice} from '@reduxjs/toolkit';
import {getSearchCurrencyProcess} from '../../../../api';

export const getSearchCurrencySlice = createSlice({
  name: 'searchCurrency',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetSearchCurrency: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchCurrencyProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchCurrencyProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(getSearchCurrencyProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetSearchCurrency} = getSearchCurrencySlice.actions;
export default getSearchCurrencySlice.reducer;
