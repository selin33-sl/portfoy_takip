import {createSlice} from '@reduxjs/toolkit';
import {getCurrencyDetailProcess} from '../../../../api';
export const getCurrencyDetailSlice = createSlice({
  name: 'getCurrencyDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
    lastPrice: undefined,
    name: undefined,
    description: undefined,
  },
  reducers: {
    resetCurrencyDetail: state => {
      state.data = undefined;
      state.lastPrice = undefined;
      state.name = undefined;
      state.description = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getCurrencyDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrencyDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.lastPrice = action.payload?.data?.lastPrice),
          (state.name = action.payload?.data?.name),
          (state.data = action.payload?.data?.data);
        state.description = action.payload?.data?.description;
      })
      .addCase(getCurrencyDetailProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetCurrencyDetail} = getCurrencyDetailSlice.actions;
export default getCurrencyDetailSlice.reducer;
