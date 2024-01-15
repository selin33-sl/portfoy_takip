import {createSlice} from '@reduxjs/toolkit';
import {getAllCurrencyProcess} from '../../../../api';
export const getAllCurrencySlice = createSlice({
  name: 'getAllCurrency',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAllCurrency: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCurrencyProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCurrencyProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getAllCurrencyProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAllCurrency} = getAllCurrencySlice.actions;
export default getAllCurrencySlice.reducer;
